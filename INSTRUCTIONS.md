# Instructions — .github-template

Guide for maintainers and coding agents working on this **hosted template** and for orgs adopting it.

## What this template is

A scaffold for the GitHub **public organization meta-repository** (`.github`):

| Layer | Purpose |
|-------|---------|
| **Root** (this repo until init) | @open-templates branding + reference [`profile/README.md`](profile/README.md) |
| [`templates/profile/README.md`](templates/profile/README.md) | Adopter public org profile — copied to `profile/README.md` on init |
| **`templates/`** (other files) | Meta-repo docs copied to root by `./scripts/init-from-template.sh` |

Adopters create a **public** org repo named exactly `.github`, run init, then fill in `profile/README.md` with their template catalog.

See [specs/features/01-purpose.md](specs/features/01-purpose.md) and [templates/ABOUT_TEMPLATES.md](templates/ABOUT_TEMPLATES.md).

---

## First steps after “Use this template”

1. **Initialize** — `./scripts/init-from-template.sh` (see [docs/init-from-template.md](docs/init-from-template.md)).
2. **Create org repo** — Public repository named `.github` under your GitHub org (if not created via template).
3. **Push** — Open [github.com/your-org](https://github.com/your-org) to preview the public org profile.
4. **Edit catalog** — Add template rows to `profile/README.md`.
5. **Optional** — Scaffold [`.github-private-template`](https://github.com/open-templates/.github-private-template) for member-only maintainer notes.

---

## Template catalog maintenance (adopters)

When your org publishes a new template repository:

1. Add a row to `profile/README.md` (public summary only).
2. Update `README.md` quick-reference tables if used.
3. Record changes in `CHANGELOG.md`.
4. If you use `.github-private`, sync member-facing rows there too.

Full playbook: adopter [`templates/INSTRUCTIONS.md`](templates/INSTRUCTIONS.md) (copied to root on init).

---

## Automation in this template

| Asset | Role |
|-------|------|
| `.github/dependabot.yml` | Dependency update PRs |
| `.github/workflows/dependabot-signature.yml` | `Co-authored-by` on Dependabot commits |
| `.github/CODEOWNERS` | Review ownership |

Details: [docs/README.md](docs/README.md) · [specs/features/04-github-automation.md](specs/features/04-github-automation.md).

---

## Agent checklist

1. Read [index.md](index.md) and [specs/FEATURES.md](specs/FEATURES.md).
2. Distinguish **hosted template** changes (root + `scripts/` + `templates/`) from **adopter** content (copied on init).
3. **Org profile edits on this hosted repo:** change [`templates/profile/README.md`](templates/profile/README.md); root [`profile/README.md`](profile/README.md) is a **placeholder demo** only (not the live open-templates catalog).
4. Keep `fixedRepoName: '.github'` in `scripts/init-from-template.mjs`.
5. Never put secrets or internal operational detail in the public `profile/README.md`.

---

## Repository map

```text
profile/README.md                 # reference public org profile (hosted demo)
templates/profile/README.md       # adopter profile → profile/README.md on init
templates/                        # other adopter files → repo root on init
scripts/init-from-template.mjs    # manifest includes profile/README.md
specs/features/03-org-profile.md  # public vs optional member profile contract
```

---

## Repository documents

[README](README.md) | **INSTRUCTIONS** | [CHANGELOG](CHANGELOG.md) | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
