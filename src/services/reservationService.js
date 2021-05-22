import axios from '@/utils/axios'

const API_URL = '/api/v1/reservation'

/**
 * Получение данных о типах оборудования и местах проката
 * @returns {Promise<any>} Данные о типах оборудования и метсах проката
 */
export async function getEquipmentTypesAndRentals() {
  return await axios.get(API_URL + '/equipment-types-and-rentals')
}
