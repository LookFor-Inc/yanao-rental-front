import axios from '@/utils/axios'
import HttpStatus from '@/utils/httpStatus'

const API_URL = '/auth/api/v1'

/**
 * Запрос на авторизацию пользователя
 * @param {string} email Email пользователя
 * @param {string} password Пароль пользователя
 * @param {boolean} remember Флаг "запомнить пользователя"
 * @returns {Promise} Запрос
 */
export async function loginUser(email, password, remember = false) {
  return await axios.post(API_URL + '/login', {
    email,
    password,
    remember
  })
}

/**
 * Запрос на выход их аккаунта
 * @returns {Promise} Запрос
 */
export async function logoutUser() {
  return await axios.post(API_URL + '/logout')
}

/**
 * Запрос на авторизацию пользователя
 * @param {string} type Арендатор или арендодатель
 * @param {string} email Email пользователя
 * @param {string} password Пароль пользователя
 * @returns {Promise} Запрос
 */
export async function registerUser(type, email, password) {
  console.log(type, email, password)
  return await axios.post(API_URL + '/registration', {
    type,
    email,
    password
  })
}

/**
 * Подтверждение Email пользователя после регистрации
 * @param {string} token Токен подтверждения
 * @returns {Promise} Запрос
 */
export async function confirmRegistration(token) {
  return await axios.get(API_URL + '/registration/confirm', {
    params: {token}
  })
}

/**
 * Отправить письмо с сылкой для сброса пароля
 * @param {string} email Email пользователя
 * @returns {Promise} Запрос
 */
export async function sendResetPasswordLink(email) {
  return await axios.post(API_URL + '/password/reset-link', {
    email
  })
}

/**
 * Проверка наличия токена восстановления пароля
 * @param {string} token Токен пользователя
 * @returns {Promise<boolean>} Статус наличия
 */
export async function checkResetPasswordToken(token) {
  const bodyFormData = new FormData()
  bodyFormData.append('token', token)

  try {
    const res = await axios.post(API_URL + '/password/check-reset-token', bodyFormData)
    return res.status === HttpStatus.OK
  } catch (e) {
    return false
  }
}

/**
 * Запрос на изменение пароля пользователя
 * @param {string} token Токен сброса пароля
 * @param {string} newPassword Новый пароль пользователя
 * @returns {Promise} Запрос
 */
export async function resetUserPassword(token, newPassword) {
  return await axios.post(API_URL + '/password/reset', {
    token,
    password: newPassword
  })
}
