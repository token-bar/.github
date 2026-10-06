# Instructions — .github

Guide for maintainers and coding agents working on the **token-bar** organization meta-repository.

## What this repository is

The GitHub **public organization meta-repository** (`.github`) for [@token-bar](https://github.com/token-bar):

| Path | Purpose |
|------|---------|
| [`profile/README.md`](profile/README.md) | Public org profile shown at [github.com/token-bar](https://github.com/token-bar) |
| `README.md` | Meta-repo overview for maintainers |
| `.github/` | Dependabot, CODEOWNERS, issue templates, and workflows |

The TokenBar app is developed in a **private** repository. Do not link to application source from the public org profile or marketing site — use [github.com/token-bar](https://github.com/token-bar) only.

---

## Maintaining the org profile

When the organization adds or changes a public repository:

1. Add or update a row in [`profile/README.md`](profile/README.md).
2. Update the repositories table in [`README.md`](README.md) if needed.
3. Record notable changes in [`CHANGELOG.md`](CHANGELOG.md).

Keep the public profile focused on visitor-facing information — no secrets or internal operational detail.

---

## Automation

| Asset | Role |
|-------|------|
| `.github/dependabot.yml` | Dependency update PRs |
| `.github/workflows/dependabot-signature.yml` | `Co-authored-by` on Dependabot commits |
| `.github/CODEOWNERS` | Review ownership (`@charlite`) |

Details: [docs/README.md](docs/README.md) · [specs/features/04-github-automation.md](specs/features/04-github-automation.md).

---

## Repository map

```text
profile/README.md                 # public org profile
.github/                          # automation and templates
docs/                             # workflow and issue template reference
specs/features/                   # purpose, org profile, automation
```

---

## Repository documents

[README](README.md) | **INSTRUCTIONS** | [CHANGELOG](CHANGELOG.md) | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
