import {
  ADD_EQUIPMENT_TO_CART, DECREASE_EQUIPMENT_AMOUNT,
  INCREASE_EQUIPMENT_AMOUNT, REMOVE_EQUIPMENT_FROM_CART
} from '../types'

/**
 * Добавление оборудования в корзину
 * @param {{id: string, name: string, img: string}} equipment Объект оборудования
 * @returns {object} Action creator
 */
export function addEquipmentToCart(equipment) {
  return {
    type: ADD_EQUIPMENT_TO_CART,
    payload: {
      equipment
    }
  }
}

/**
 * Удаление оборудования из корзины
 * @param {string} equipmentId Идентификатор оборудования
 * @returns {object} Action creator
 */
export function removeEquipmentFromCart(equipmentId) {
  return {
    type: REMOVE_EQUIPMENT_FROM_CART,
    payload: {
      equipmentId
    }
  }
}

/**
 * Увеличение числа оборудования одного типа в корзине
 * @param {string} equipmentId Идентификатор оборудования
 * @returns {object} Action creator
 */
export function increaseEquipmentAmount(equipmentId) {
  return {
    type: INCREASE_EQUIPMENT_AMOUNT,
    payload: {
      equipmentId
    }
  }
}

/**
 * Уменьшение числа оборудования одного типа в корзине
 * @param {string} equipmentId Идентификатор оборудования
 * @returns {object} Action creator
 */
export function decreaseEquipmentAmount(equipmentId) {
  return {
    type: DECREASE_EQUIPMENT_AMOUNT,
    payload: {
      equipmentId
    }
  }
}
