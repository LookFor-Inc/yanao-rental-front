import {
  ADD_EQUIPMENT_TO_CART,
  DECREASE_EQUIPMENT_AMOUNT,
  INCREASE_EQUIPMENT_AMOUNT,
  REMOVE_EQUIPMENT_FROM_CART
} from '../types'

const initialState = {
  equipments: {}
}

/**
 * Обработчик состояния корзины
 * @param {object} state Состояние
 * @param {object} action Событие (данные о корзине)
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case ADD_EQUIPMENT_TO_CART:
      return {
        ...state,
        equipments: {
          ...state.equipments,
          [payload.equipment.id]: {
            name: payload.equipment.name,
            img: payload.equipment.img,
            amount: 1
          }
        }
      }
    case REMOVE_EQUIPMENT_FROM_CART:
      delete state.equipments[payload.equipmentId]
      return state
    case INCREASE_EQUIPMENT_AMOUNT:
      state.equipments[payload.equipmentId].amount++
      return state
    case DECREASE_EQUIPMENT_AMOUNT:
      const temp = state.equipments[payload.equipmentId].amount--
      if (temp === 0) {
        delete state.equipments[payload.equipmentId]
      }
      return state
    default:
      return state
  }
}
