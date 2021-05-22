import axios from '@/utils/axios'

const API_URL = '/api/v1/rental'

/**
 * Получение информации о месте проката по идентификатору
 * @param {string} rentServiceId Идентификатор сервиса проката
 * @returns {Promise} Данные о конкретном месте проката
 */
export async function takeRentService(rentServiceId) {
  return axios.get(API_URL + `/${rentServiceId}`)
}
