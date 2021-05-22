import {
  ADD_EQUIPMENT_TO_CART,
  DECREASE_EQUIPMENT_AMOUNT,
  INCREASE_EQUIPMENT_AMOUNT,
  REMOVE_EQUIPMENT_FROM_CART
} from '../types'

const url =
  'https://i.shgcdn.com/fda42618-5f0b-41db-b64a-0e270df24194/-/format/auto/-/preview/3000x3000/-/quality/lighter/'

const initialState = {
  equipments: [
    {
      id: 1,
      name: 'Велосипед STELS',
      img: url,
      amount: 2
    },
    {
      id: 2,
      name: 'Велосипед Trek',
      img: url,
      amount: 1
    },
    {
      id: 3,
      name: 'Велосипед STERN',
      img: url,
      amount: 5
    }
  ]
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
