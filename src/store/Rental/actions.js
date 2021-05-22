import {SET_RENTAL_TAB} from '@/store/types'

/**
 * Установка последней открытой вкладки в Redux
 * @param {number} tabValue Индекс вкладки
 * @returns {object} Action creator
 */
export function setOpenedRentalTab(tabValue) {
  return {
    type: SET_RENTAL_TAB,
    payload: tabValue
  }
}
