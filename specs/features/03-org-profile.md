---
type: Feature
title: Organization profile
description: Public visitor-facing profile README on the org homepage.
tags: [github, organization, profile]
timestamp: 2026-08-17T00:00:00Z
---

# Organization profile

GitHub renders **two** organization profile READMEs when you use both meta-repos:

| Repository | Audience | File |
|------------|----------|------|
| `org/.github` | **Everyone** (public visitors) | `profile/README.md` |
| `org/.github-private` | Signed-in org members (optional) | `profile/README.md` |

This template scaffolds the **public** profile at `profile/README.md`.

## Hosted template vs adopter copy

| Path | When |
|------|------|
| **Root** `profile/README.md` | Placeholder demo on the hosted template repo (not the live org catalog) |
| **`templates/profile/README.md`** | Placeholder copied to `profile/README.md` when adopters run init |

After init, edit **`profile/README.md`** in the adopter org repo to list templates with one-line public summaries. Keep internal maintainer detail out of this file — use `.github-private` if you adopt that template too.

Preview: push to `main` and open `https://github.com/your-org` (no sign-in required).
