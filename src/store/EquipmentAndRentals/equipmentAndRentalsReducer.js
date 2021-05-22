import {FETCH_RENTAL_AND_EQUIPMENTS_FULFILLED} from '@/store/types'

const initialState = {
  data: {
    equipmentCategories: [],
    rentals: []
  }
}

/**
 * Обработчик состояния оборудования и точек проката
 * @param {object} state Состояние
 * @param {object} action Событие (данные об оборудовании и точек проката)
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case FETCH_RENTAL_AND_EQUIPMENTS_FULFILLED:
      return {
        ...state,
        data: payload.data
      }
    default:
      return state
  }
}
