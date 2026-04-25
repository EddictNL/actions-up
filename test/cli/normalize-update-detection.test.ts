import { describe, expect, it } from 'vitest'

import { normalizeUpdateDetection } from '../../cli/normalize-update-detection'

describe('normalizeUpdateDetection', () => {
  it('returns version for undefined', () => {
    let result = normalizeUpdateDetection(undefined)

    expect(result).toBe('version')
  })

  it('returns version for version', () => {
    let result = normalizeUpdateDetection('version')

    expect(result).toBe('version')
  })

  it('returns commit for commit', () => {
    let result = normalizeUpdateDetection('commit')

    expect(result).toBe('commit')
  })

  it('handles uppercase input', () => {
    let result = normalizeUpdateDetection('COMMIT')

    expect(result).toBe('commit')
  })

  it('throws for invalid detect-by value', () => {
    expect(() => normalizeUpdateDetection('sha')).toThrow(
      'Invalid detect-by "sha". Expected "version" or "commit".',
    )
  })
})
