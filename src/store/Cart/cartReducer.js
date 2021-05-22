import {
  ADD_EQUIPMENT_TO_CART, REMOVE_EQUIPMENT_FROM_CART,
  INCREASE_EQUIPMENT_AMOUNT, DECREASE_EQUIPMENT_AMOUNT
} from '../types'

const initialState = {
  equipments: []
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
      payload.equipment.amount = 1
      return {
        ...state,
        equipments: [...state.equipments, payload.equipment]
      }
    case REMOVE_EQUIPMENT_FROM_CART:
      return {
        ...state,
        equipments: state.equipments.filter(({id}) => id !== payload.equipmentId)
      }
    case INCREASE_EQUIPMENT_AMOUNT:
      const item1 = state.equipments.find(({id}) => id === payload.equipmentId)
      item1.amount++
      return {
        ...state,
        equipments: [...state.equipments]
      }
    case DECREASE_EQUIPMENT_AMOUNT:
      const item2 = state.equipments.find(({id}) => id === payload.equipmentId)
      const temp = item2.amount--
      if (temp === 1) {
        return {
          ...state,
          equipments: state.equipments.filter(({id}) => id !== payload.equipmentId)
        }
      }
      return {
        ...state,
        equipments: [...state.equipments]
      }
    default:
      return state
  }
}
