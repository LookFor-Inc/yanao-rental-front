import {SET_RENTAL_TAB} from '../types'
const initialTab = {
  rentalTab: '/rental/list'
}

/**
 * Обработчик состояния последней открытой вкладки
 * @param {object} state Состояние
 * @param {object} action Событие
 * @returns {number|object} Новое состояние
 */
export default (state = initialTab, action) => {
  switch (action.type) {
    case SET_RENTAL_TAB:
      console.log(state, action)
      return {
        ...state,
        rentalTab: action.payload
      }
    default:
      return state
  }
}
