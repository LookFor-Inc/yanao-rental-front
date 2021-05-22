import {getEquipmentTypesAndRentals} from '@/services/reservationService'
import {FETCH_RENTAL_AND_EQUIPMENTS_FULFILLED} from '@/store/types'

/**
 * Получение данных об оборудовании и пунктах выдачи
 * @returns {object} Action creator
 */
export function fetchEquipmentTypesAndRentals() {
  return async dispatch => {
    await getEquipmentTypesAndRentals()
      .then(response => {
        dispatch({
          type: FETCH_RENTAL_AND_EQUIPMENTS_FULFILLED,
          payload: {
            data: response.data
          }
        })
      })
  }
}
