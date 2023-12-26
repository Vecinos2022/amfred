import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000
})

const setToken = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  if (token && config.headers != undefined) {
    config.headers['x-token'] = `${token}`
  }
  return config
}

axiosInstance.interceptors.request.use(
  (config) => setToken(config),
  (error) => Promise.reject(error)
)

export default axiosInstance
