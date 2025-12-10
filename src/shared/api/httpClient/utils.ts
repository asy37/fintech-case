/**
 * HTTP Client Utilities
 * Token extraction and helper functions
 */

import type { AccessTokenShape } from './config'

/**
 * Extracts access token from API response payload
 * @param payload - Response payload that may contain access token
 * @returns Access token string or null
 */
export const extractAccessToken = (
  payload: AccessTokenShape,
): string | null => {
  return payload?.accessToken ?? payload?.data?.accessToken ?? null
}

