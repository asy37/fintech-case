/**
 * HTTP Client Module
 * Centralized exports for all HTTP client functionality
 */

export { API_BASE_URL } from './config'
export { extractAccessToken } from './utils'
export { createServerApi } from './server'
export { clientApi } from './client'

// Re-export clientApi as apiClient for backward compatibility
export { clientApi as apiClient } from './client'

