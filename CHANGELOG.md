# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-08-17

### Added

- **`.github-template`** — public GitHub organization meta-repository scaffold for the special [`.github`](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile) repo.
- **`profile/README.md`** — placeholder public org homepage; init copies [`templates/profile/README.md`](templates/profile/README.md) with `owner-username`, `owner-display-name`, and `org-tagline` placeholders.
- **Repositories table** — starter catalog row adopters replace with their organization repositories.
- **Two-layer model** — hosted root keeps `@open-templates` branding; adopter files live under `templates/`.
- **Init wizard** — `./scripts/init-from-template.sh` with `fixedRepoName: .github`, org profile flags (`--org-display-name`, `--org-tagline`), and post-init script cleanup.
- **`specs/features/`** — purpose, init workflow, org profile, GitHub automation.
- **Shared repository scaffolding** — Dependabot, CODEOWNERS placeholders, issue templates, PR template, and standard markdown docs via `@open-templates/specs`.
- **Pairing note** with [`.github-private-template`](https://github.com/open-templates/.github-private-template) for an optional member-only org profile.

---

## Repository documents

[README](README.md) | [INSTRUCTIONS](INSTRUCTIONS.md) | **CHANGELOG** | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
