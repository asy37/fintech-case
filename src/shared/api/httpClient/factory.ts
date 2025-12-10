/**
 * Axios Instance Factory
 * Creates configured axios instances with common settings
 */

import axios, { AxiosInstance } from 'axios'
import { API_BASE_URL, REQUEST_TIMEOUT } from './config'

/**
 * Creates axios instance with common configuration
 * @returns Configured axios instance
 */
export const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: REQUEST_TIMEOUT,
  })
}

