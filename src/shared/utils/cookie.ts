/**
 * Client-side cookie utility functions
 * Note: These functions only work in browser environment
 */

const COOKIE_EXPIRY_DAYS = 7
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000

/**
 * Sets a cookie with the given name, value, and expiration days
 * @param name - Cookie name
 * @param value - Cookie value
 * @param days - Number of days until expiration (default: 7)
 */
export const setCookie = (name: string, value: string, days: number = COOKIE_EXPIRY_DAYS): void => {
  if (typeof document === 'undefined') return

  const expires = new Date()
  expires.setTime(expires.getTime() + days * MILLISECONDS_PER_DAY)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

/**
 * Deletes a cookie by setting its expiration date to the past
 * @param name - Cookie name to delete
 */
export const deleteCookie = (name: string): void => {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
}

/**
 * Gets a cookie value by name
 * @param name - Cookie name
 * @returns Cookie value or null if not found
 */
export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null

  const nameEQ = `${name}=`
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length)
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length)
    }
  }

  return null
}

