import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, RESET_AUTH_ERROR, SET_AUTH_ERROR} from '@/store/types'

const initialState = {
  isLoggedIn: false,
  error: ''
}

/**
 * Обработчик авторизации
 * @param {object} state Состояние
 * @param {object} action Событие
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: null
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: payload.error
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: payload
      }
    case RESET_AUTH_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}
