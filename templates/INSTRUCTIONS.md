# Instructions — owner-display-name `.github`

Guide for maintainers and coding agents working on the **public organization meta-repository** (`owner-username/.github`).

## What this repository is

| Path | Role |
|------|------|
| [`profile/README.md`](profile/README.md) | **Public org profile** — template catalog on [github.com/owner-username](https://github.com/owner-username) |
| [`README.md`](README.md) | Landing page when browsing this repo |
| [`INSTRUCTIONS.md`](INSTRUCTIONS.md) | This file |
| [`CHANGELOG.md`](CHANGELOG.md) | Notable changes to this meta-repo |
| [`docs/`](docs/README.md) | Workflows and GitHub UI files **in this repo** |

Template source code lives in **separate repositories**. Do not duplicate full template READMEs in the org profile — link out and summarize in one sentence.

### Optional private member profile

Some orgs also maintain [`.github-private`](https://github.com/owner-username/.github-private) for member-only catalog extras (maintainer tables, internal doc links). Keep **public summaries** here; put member-only detail there.

---

## Template categories

| Category | Purpose | Example |
|----------|---------|---------|
| **Repository templates** | Empty repo shells | `github-repo-template` |
| **Package templates** | Publishable libraries | `npm-package-template` |
| **Frontend templates** | Client apps | Your SPA templates |
| **Backend templates** | APIs and workers | Your API templates |

Call out **bundles** when frontend and backend templates share a contract.

---

## Adding a new template to the org index

1. **Publish** the template under `owner-username`.
2. **Choose a category** (repo, package, frontend, backend).
3. **Update [`profile/README.md`](profile/README.md)** — add a table row: name (link) + one-line summary.
4. **Update [`README.md`](README.md)** quick-reference tables to match.
5. **Record the change** in [`CHANGELOG.md`](CHANGELOG.md).
6. **Org profile description** (optional): GitHub org **Settings → Profile** — keep in sync with the tagline in `profile/README.md`.

If you use `.github-private`, mirror catalog rows there with optional **Docs** links for members.

---

## Editing the org profile README

[`profile/README.md`](profile/README.md) supports GitHub-flavored markdown plus limited HTML (e.g. `<div align="center">`).

Guidelines:

- Lead with what your org offers and how to use templates.
- One table per category; consistent columns: **Template** | **Summary**.
- Keep links absolute to `https://github.com/owner-username/<repo>`.
- Avoid secrets, internal URLs, or operational detail on this **public** page.

Preview: push to `main` and open [github.com/owner-username](https://github.com/owner-username).

---

## Automation in this repo

| Asset | Role |
|-------|------|
| `.github/dependabot.yml` | Dependency update PRs |
| `.github/workflows/dependabot-signature.yml` | `Co-authored-by` on Dependabot commits |
| `.github/CODEOWNERS` | Review ownership |

Details: [docs/README.md](docs/README.md).

---

## Agent checklist

1. Read [`profile/README.md`](profile/README.md) and this file.
2. Confirm which **category** a template belongs to.
3. Add a table row; sync [`README.md`](README.md) if used.
4. Append [`CHANGELOG.md`](CHANGELOG.md).
5. Do not expose member-only operational detail on the public profile.

---

## Repository documents

[README](README.md) | **INSTRUCTIONS** | [CHANGELOG](CHANGELOG.md) | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
