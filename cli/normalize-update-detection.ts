import type { UpdateDetection } from '../types/update-detection'

/**
 * Normalizes the update detection option.
 *
 * @param detectBy - Raw detect-by option.
 * @returns Normalized update detection strategy.
 */
export function normalizeUpdateDetection(
  detectBy: undefined | string,
): UpdateDetection {
  let normalized = (detectBy ?? 'version').toLowerCase()
  if (normalized === 'version' || normalized === 'commit') {
    return normalized
  }

  throw new Error(
    `Invalid detect-by "${detectBy}". Expected "version" or "commit".`,
  )
}
