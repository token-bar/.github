import { COMMON_MANIFEST } from './common.js';

/**
 * Adopter manifest for `.github` org meta-repositories.
 * Copies `templates/profile/README.md` → `profile/README.md` (public org homepage).
 *
 * @type {[string, string][]}
 */
export const GITHUB_ORG_MANIFEST = [
  ...COMMON_MANIFEST,
  ['README.md', 'README.md'],
  ['profile/README.md', 'profile/README.md'],
];
