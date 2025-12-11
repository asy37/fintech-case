const COOKIE_EXPIRY_DAYS = 7
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000

export const setCookie = (
  name: string,
  value: string,
  days: number = COOKIE_EXPIRY_DAYS,
): void => {
  if (typeof document === 'undefined') return

  const expires = new Date()
  expires.setTime(expires.getTime() + days * MILLISECONDS_PER_DAY)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

export const deleteCookie = (name: string): void => {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
}

export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null

  const nameEQ = `${name}=`
  const cookies = document.cookie.split(';')

  for (const cookie of cookies) {
    const trimmedCookie = cookie.trimStart()
    if (trimmedCookie.startsWith(nameEQ)) {
      return trimmedCookie.substring(nameEQ.length, trimmedCookie.length)
    }
  }

  return null
}
