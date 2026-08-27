import { BUNDLER_OPTIONS } from './bundlers.js';
import { titleCase } from './git-context.js';
import {
  buildDetectedAuthor,
  promptAuthorStep,
  resolveAuthorFromArgs,
  resolveAuthorStepConfig,
} from './author.js';
import { fetchOwnerId, buildAuthorEmail } from './github.js';
import {
  brandHeader,
  step,
  infoPanel,
  summaryPanel,
  select,
  confirm,
  promptText,
  error,
  muted,
} from './terminal.js';

function resolveOrgProfileFields(owner, args) {
  const orgDisplayName =
    args.orgDisplayName ?? args.displayName ?? titleCase(owner);
  const orgTagline =
    args.orgTagline ??
    `Open source from ${orgDisplayName}`;
  return { orgDisplayName, orgTagline };
}

/**
 * @param {import('./types.js').GitContext} git
 * @param {import('./types.js').InitArgs} args
 * @param {{ includePackageName?: boolean, includeAuthorStep?: boolean, includeBundler?: boolean, includeOrgProfile?: boolean, defaultBundler?: string, templateLabel?: string, authorStep?: import('./types.js').AuthorStepConfig, fixedRepoName?: string | null }} options
 * @returns {Promise<import('./types.js').InitConfig>}
 */
export async function resolveConfigInteractive(git, args, options = {}) {
  const {
    includePackageName = false,
    includeAuthorStep = false,
    includeBundler = false,
    includeOrgProfile = false,
    defaultBundler = 'npm',
    templateLabel = 'template init',
    authorStep = {},
    fixedRepoName = null,
  } = options;

  if (args.yes) {
    return buildConfigFromDefaults(git, args, {
      includePackageName,
      includeAuthorStep,
      includeBundler,
      defaultBundler,
      fixedRepoName,
      includeOrgProfile,
    });
  }

  brandHeader(templateLabel);

  let author = null;
  if (includeAuthorStep) {
    const labels = resolveAuthorStepConfig(authorStep);
    step(1, labels.stepTitle);
    const detected = buildDetectedAuthor(git);
    author = await promptAuthorStep(detected, args, authorStep);
  }

  const repoStep = includeAuthorStep ? 2 : 1;
  step(repoStep, 'repository');

  if (git.sources.length > 0) {
    const rows = [];
    if (git.remoteUrl) rows.push({ label: 'remote', value: git.remoteUrl });
    if (git.owner && git.repo) {
      rows.push({ label: 'repository', value: `${git.owner}/${git.repo}` });
    }
    rows.push({ label: 'via', value: git.sources.join(', ') });
    infoPanel('Detected from your environment', rows);
  }

  const owner = await promptText(
    'GitHub owner (username or org)',
    args.owner ?? git.owner ?? ''
  );
  const repo =
    fixedRepoName ??
    (await promptText('Repository name', args.repo ?? git.repo ?? ''));

  let packageName = repo;
  if (includePackageName) {
    packageName = await promptText(
      'npm package name',
      args.packageName ?? repo
    );
  }

  let orgDisplayName = titleCase(owner);
  let orgTagline = `Open source from ${orgDisplayName}`;

  if (includeOrgProfile) {
    const orgStep = (includeAuthorStep ? 2 : 1) + 1;
    step(orgStep, 'organization profile');
    orgDisplayName = await promptText(
      'Organization display name',
      args.orgDisplayName ?? args.displayName ?? titleCase(owner)
    );
    orgTagline = await promptText(
      'Organization tagline (shown on profile/README.md)',
      args.orgTagline ?? `Open source from ${orgDisplayName}`
    );
  }

  const displayName = includeOrgProfile
    ? orgDisplayName
    : author?.authorDisplayName ??
      (await promptText(
        'Author / maintainer display name',
        args.displayName ?? git.displayName ?? titleCase(owner)
      ));

  let bundler = defaultBundler;
  if (includeBundler) {
    const defaultIndex = Math.max(
      0,
      BUNDLER_OPTIONS.findIndex((b) => b.id === (args.bundler ?? defaultBundler))
    );

    const choice = await select({
      message: 'Package manager (Dependabot ecosystem)',
      choices: BUNDLER_OPTIONS.map((opt) => ({
        value: opt.id,
        label: opt.label,
        hint: opt.id === defaultBundler ? 'detected' : undefined,
      })),
      defaultIndex,
    });
    bundler = choice.value;
  }

  const summaryRows = [];
  if (author) {
    summaryRows.push({
      label: 'Author',
      value: `${author.authorDisplayName} <${author.authorEmail}>`,
    });
    summaryRows.push({
      label: 'GitHub',
      value: `https://github.com/${author.authorLogin}`,
    });
  }
  if (includeOrgProfile) {
    summaryRows.push({ label: 'Org name', value: orgDisplayName });
    summaryRows.push({ label: 'Org tagline', value: orgTagline });
  }
  summaryRows.push({ label: 'Owner', value: owner });
  summaryRows.push({ label: 'Repo', value: repo });
  if (includePackageName) summaryRows.push({ label: 'Package', value: packageName });
  if (!author) summaryRows.push({ label: 'Name', value: displayName });
  if (includeBundler) {
    const label =
      BUNDLER_OPTIONS.find((b) => b.id === bundler)?.label ?? bundler;
    summaryRows.push({ label: 'Bundler', value: label });
  }

  summaryPanel('Summary', summaryRows);
  await confirm('Proceed with initialization?');

  return {
    owner,
    repo,
    packageName,
    displayName,
    orgDisplayName: includeOrgProfile ? orgDisplayName : undefined,
    orgTagline: includeOrgProfile ? orgTagline : undefined,
    bundler,
    ...author,
  };
}

/**
 * @param {import('./types.js').GitContext} git
 * @param {import('./types.js').InitArgs} args
 */
async function buildConfigFromDefaults(git, args, options) {
  const owner = args.owner ?? git.owner;
  const repo = options.fixedRepoName ?? args.repo ?? git.repo;
  if (!owner || !repo) {
    error(
      'Could not detect owner/repo. Set git remote origin or pass --owner and --repo.'
    );
    process.exit(1);
  }

  let author = null;
  if (options.includeAuthorStep) {
    const detected = buildDetectedAuthor(git);
    author = resolveAuthorFromArgs(args, detected);
    if (!author.authorOwnerId && author.authorLogin) {
      author.authorOwnerId = await fetchOwnerId(author.authorLogin);
      author.authorEmail = buildAuthorEmail({
        owner: author.authorLogin,
        ownerId: author.authorOwnerId,
      });
    }
  }

  const { orgDisplayName, orgTagline } = resolveOrgProfileFields(owner, args);

  return {
    owner,
    repo,
    packageName: args.packageName ?? repo,
    displayName: options.includeOrgProfile
      ? orgDisplayName
      : author?.authorDisplayName ??
        args.displayName ??
        git.displayName ??
        titleCase(owner),
    orgDisplayName: options.includeOrgProfile ? orgDisplayName : undefined,
    orgTagline: options.includeOrgProfile ? orgTagline : undefined,
    bundler: args.bundler ?? options.defaultBundler ?? 'npm',
    ...author,
  };
}

export { buildDetectedAuthor };
