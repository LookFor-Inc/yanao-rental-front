import HttpStatus from '@/utils/httpStatus'

export const API_BASE_URL = 'http://localhost:8080'
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/auth/oauth2/callback'

/**
 * Получение ссылки авторизации через соц. сеть
 * @param {string} provider Название соц. сети
 * @returns {string} Ссылка авторизации
 */
export const getAuthLink = provider => API_BASE_URL + '/api/oauth2/authorize/' +
  provider + '?redirect_uri=' + OAUTH2_REDIRECT_URI

/**
 * Проверка ответа от сервера на требование авторизации
 * @param {object} response Ответ сервера
 * @returns {boolean} Необходимость авторизации
 */
export function checkUnauthorized(response) {
  try {
    return response.status === HttpStatus.UNAUTHORIZED
      && response.data.message === 'Full authentication is required to access this resource'
  } catch (e) {
    console.error(e)
  }
  return false
}
