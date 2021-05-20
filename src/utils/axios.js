import axios from 'axios'
import {API_BASE_URL, checkUnauthorized} from '@/data/backend'
import {logoutSuccess} from '@/store/Auth/actions'
import {store} from '@/store/configureStore'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': [API_BASE_URL],
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true
  }
})

const {dispatch} = store

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (checkUnauthorized(error.response)) {
      dispatch(logoutSuccess())
    }

    return Promise.reject(error)
  })

export default axiosInstance
