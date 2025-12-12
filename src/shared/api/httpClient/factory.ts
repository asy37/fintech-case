import axios, { AxiosInstance } from 'axios'

import { API_BASE_URL, REQUEST_TIMEOUT } from './config'

export const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: REQUEST_TIMEOUT,
  })
}
