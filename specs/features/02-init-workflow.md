---
type: Playbook
title: Init workflow
description: Copy personalized files from templates/ into the repo root.
tags: [init, template]
timestamp: 2026-08-17T00:00:00Z
---

# Init workflow

1. **Use this template** on GitHub (or clone) into an org repo named `.github`.
2. Run `./scripts/init-from-template.sh` to copy from `templates/` with org/maintainer placeholders resolved.
3. Repository name is fixed to `.github` (`fixedRepoName` in the init script).
4. See [docs/init-from-template.md](../../docs/init-from-template.md) for CLI flags.

## Init manifest (org-specific)

Defined in `scripts/lib/template-init/manifests/github-org.js`. Besides shared community files from [COMMON_MANIFEST](https://github.com/open-templates/github-repo-template/blob/main/scripts/lib/template-init/manifests/common.js):

| Source (`templates/`) | Destination |
|------------------------|-------------|
| `README.md` | `README.md` |
| **`profile/README.md`** | **`profile/README.md`** |

The **`profile/README.md`** copy is the public org homepage GitHub renders for all visitors at `github.com/your-org`.

Shared adopter files follow the same manifest pattern as [github-repo-template](https://github.com/open-templates/github-repo-template).
