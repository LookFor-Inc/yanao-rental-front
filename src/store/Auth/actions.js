import {loginUser, logoutUser} from '@/services/authService'
import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, RESET_AUTH_ERROR, SET_AUTH_ERROR} from '@/store/types'
import HttpStatus from '@/utils/httpStatus'

/**
 * Вход пользователя
 * @param {string} email Email пользователя
 * @param {string} password Пароль пользователя
 * @param {boolean} remember Флаг "запомнить пользователя"
 * @returns {function(*): Promise<void>} Async action creator
 */
export function login(email, password, remember = false) {
  return async dispatch => {
    try {
      const res = await loginUser(email, password, remember)

      if (res.status === HttpStatus.OK) {
        dispatch(loginSuccess())
        return Promise.resolve(res)
      } else {
        dispatch(loginFail(res.status))
        return Promise.reject(res)
      }
    } catch (e) {
      dispatch(loginFail(e.response.status))
      return Promise.reject(e)
    }
  }
}

/**
 * Успешная авторизвция
 * @returns {{type: string}} Action creator
 */
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

/**
 * Неуспешная авторизация
 * @param {string} error Ошибка
 * @returns {{payload: {error}, type: string}} Action creator
 */
export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    payload: {
      error
    }
  }
}

/**
 * Выход из аккаунта
 * @returns {function(*): Promise<void>} Async action creator
 */
export function logout() {
  return async dispatch => {
    try {
      await logoutUser()
      dispatch(logoutSuccess())
    } catch (e) {
      dispatch(setAuthError(e.response.message))
    }
  }
}

/**
 * Успешный выход из аккаунта
 * @returns {{type: string}} Action creator
 */
export function logoutSuccess() {
  return {
    type: LOGOUT
  }
}

/**
 * Установка ошибки авторизации
 * @param {string} error Ошибка
 * @returns {{payload, type: string}} Action creator
 */
export function setAuthError(error) {
  return {
    type: SET_AUTH_ERROR,
    payload: error
  }
}

/**
 * Удаление ошибки авторизации
 * @returns {{type: string}} Action creator
 */
export function resetAuthError() {
  return {
    type: RESET_AUTH_ERROR
  }
}
