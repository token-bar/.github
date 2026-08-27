# .github-template

A **GitHub organization meta-repository template** from [@open-templates](https://github.com/open-templates). Scaffold a public [`.github`](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile) repo with the visitor-facing org profile, template catalog starter, Dependabot, CODEOWNERS, and issue/PR scaffolding.

Pair with [`.github-private-template`](https://github.com/open-templates/.github-private-template) if you also want a member-only org profile for maintainers.

## Quick start

1. **Use this template** on GitHub inside your organization (repo name must be `.github`).
2. Clone and personalize from [`templates/`](templates/):

```bash
git clone https://github.com/open-templates/.github-template.git
cd .github-template
./scripts/init-from-template.sh
```

The hosted repo keeps **@open-templates** branding in root markdown until you run init. See [docs/init-from-template.md](docs/init-from-template.md).

## Two layers

| Location | `profile/README.md` |
|----------|---------------------|
| **Root** [`profile/README.md`](profile/README.md) | Hosted **demo** layout (placeholder catalog — not the live open-templates org index) |
| [`templates/profile/README.md`](templates/profile/README.md) | Adopter org profile — placeholders: `owner-username`, `owner-display-name`, default tagline |

After init, edit **`profile/README.md`** in your org repo to list your templates. On this hosted template, edit **`templates/profile/README.md`** to change what adopters receive.

## Repository layout

```text
profile/README.md              # reference org profile (until init overwrites in adopter clone)
templates/
├── profile/README.md          # adopter org profile → copied to profile/README.md
├── README.md                  # adopter meta-repo landing
├── INSTRUCTIONS.md
└── …                          # see templates/ABOUT_TEMPLATES.md
scripts/                       # init wizard (removed after init)
specs/features/                # purpose, init, org profile, automation
```

### What you get after init

| Path | Role |
|------|------|
| `profile/README.md` | **Public** org profile (template catalog on your org homepage) |
| `README.md` / `INSTRUCTIONS.md` | Meta-repo governance for your org |
| `.github/dependabot.yml` | Dependency update PRs |
| `.github/CODEOWNERS` | Review ownership |

Workflow and issue template reference: **[docs/README.md](docs/README.md)** · [INSTRUCTIONS.md](INSTRUCTIONS.md) · [index.md](index.md)

## Reference implementation

The live public catalog for [@open-templates](https://github.com/open-templates) is [open-templates/.github](https://github.com/open-templates/.github). Use it as inspiration **after** init — do not copy it into this template repo’s root `profile/README.md`.

## License

MIT — see [LICENSE](LICENSE).

---

## Repository documents

**README** | [INSTRUCTIONS](INSTRUCTIONS.md) | [CHANGELOG](CHANGELOG.md) | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
