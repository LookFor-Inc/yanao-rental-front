import axios from '@/utils/axios'
import HttpStatus from '@/utils/httpStatus'

const API_URL = '/user'

/**
 * Проверка уникальности email
 * @param {string} email Адрес электронной почты
 * @returns {Promise<boolean>} Статус уникальности
 */
export async function checkEmailAvailability(email) {
  const bodyFormData = new FormData()
  bodyFormData.append('email', email)

  try {
    const res = await axios.post(API_URL + '/check-email', bodyFormData)
    return res.status === HttpStatus.OK
  } catch (e) {
    return false
  }
}

/**
 * Получение информации об авторизированном пользователе
 * @returns {Promise<any>} Информация
 */
export async function fetchUserInfo() {
  return await axios.get(API_URL + '/')
}
