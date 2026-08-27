# Initialize from template

Scaffolds a **public organization meta-repository** (`.github`) — copies personalized files from `templates/` to the repository root. No `package.json` required.

## Two layers

| Location | Purpose |
|----------|---------|
| **Root** (hosted template) | Public face with `@open-templates` branding |
| **`templates/`** | Adopter files with `owner-username` placeholders |

### `profile/README.md`

| Location | Role |
|----------|------|
| **Root** `profile/README.md` | Placeholder demo on the hosted template repo (not the live org catalog) |
| **`templates/profile/README.md`** | Adopter org homepage — init copies this to `profile/README.md` |

The init manifest in `scripts/lib/template-init/manifests/` includes `profile/README.md` → `profile/README.md`.

`./scripts/init-from-template.sh` runs the `@open-templates` init wizard (Node.js).

## Run

Requires **Node.js 18+** only — no `npm install`.

```bash
chmod +x scripts/init-from-template.sh   # once
./scripts/init-from-template.sh
```

Or directly:

```bash
node scripts/init-from-template.mjs
```

The wizard auto-detects your Git identity and organization from `git remote` / `gh`. The repository name is fixed to **`.github`** (GitHub special repo).

```bash
./scripts/init-from-template.sh --yes
./scripts/init-from-template.sh --owner acme-corp --org-display-name "Acme Corp" --org-tagline "Starter templates for shipping faster"
node scripts/init-from-template.mjs --help
```

## After init

1. Review `git diff`.
2. Create a **public** org repo named exactly `.github` on GitHub (if not already).
3. Push and open [your org profile](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile).
4. Edit `profile/README.md` — add your template catalog rows (public summaries only).
5. Optional: scaffold [`.github-private`](https://github.com/open-templates/.github-private-template) for member-only maintainer notes.
6. Uncomment `# assignees: # - owner-username` in `.github/dependabot.yml` if desired.

The entire `scripts/` folder is removed after init (one-time wizard). Pass `--no-cleanup` to keep it for debugging.

---

[← Docs index](README.md)
