import type { AccessTokenShape } from './config'

export const extractAccessToken = (
  payload: AccessTokenShape,
): string | null => {
  return payload?.accessToken ?? payload?.data?.accessToken ?? null
}
