# About this folder

Adopter files with `owner-username`, `owner-display-name`, and `author-github-login` placeholders.

Placeholders in `templates/profile/README.md`: `owner-username`, `owner-display-name`, `org-tagline` (replaced by `./scripts/init-from-template.sh`).

## Org profile (`profile/README.md`)

The file **`templates/profile/README.md`** is the main deliverable: GitHub renders it as the **public** organization profile for all visitors at `github.com/your-org`. Init copies it to **`profile/README.md`** at the repo root.

On this hosted template repo, root **`profile/README.md`** is a placeholder demo; edit **`templates/profile/README.md`** to change what adopters receive.

| File here | Destination |
|-----------|-------------|
| **`profile/README.md`** | **`profile/README.md`** (public org homepage) |
| `README.md` | `README.md` |
| `INSTRUCTIONS.md` | `INSTRUCTIONS.md` |
| `LICENSE` | `LICENSE` |
| `CHANGELOG.md` | `CHANGELOG.md` |
| `CONTRIBUTING.md` | `CONTRIBUTING.md` |
| `SECURITY.md` | `SECURITY.md` |
| `CODE_OF_CONDUCT.md` | `CODE_OF_CONDUCT.md` |
| `gitignore` | `.gitignore` |
| `dependabot.yml` | `.github/dependabot.yml` |
| `CODEOWNERS` | `.github/CODEOWNERS` |

The repository **must** be named `.github` in your GitHub organization. Root files keep [@open-templates](https://github.com/open-templates) branding until init runs.

Optional: pair with [`.github-private-template`](https://github.com/open-templates/.github-private-template) for a member-only org profile.

See [docs/init-from-template.md](../docs/init-from-template.md).
