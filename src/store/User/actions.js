import {fetchUserInfo} from '@/services/userService'
import {USER_CLEAR, USER_FETCHED} from '@/store/types'
import HttpStatus from '@/utils/httpStatus'

/**
 * Получение информации о пользователе
 * @returns {function(*): Promise<void>} Async action creator
 */
export function getUserInfo() {
  return async dispatch => {
    try {
      const res = await fetchUserInfo()

      if (res.status === HttpStatus.OK) {
        dispatch(setUserData(res.data))
        return Promise.resolve(res)
      }
    } catch (e) {
      dispatch(resetUserData)
      return Promise.reject(e)
    }
  }
}

/**
 * Установка данных пользователя
 * @param {object} data Данные пользователя
 * @returns {{payload, type: string}} Action creator
 */
export function setUserData(data) {
  return {
    type: USER_FETCHED,
    payload: data
  }
}

/**
 * Сброс данных пользователя
 * @returns {{type: string}} Action creator
 */
export function resetUserData() {
  return {
    type: USER_CLEAR
  }
}
