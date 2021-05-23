import {USER_CLEAR, USER_FETCHED} from '@/store/types'

const initialState = {
  id: null,
  email: null,
  type: null,
  avatar: null
}

/**
 * Обработчик пользовательских данных
 * @param {object} state Состояние
 * @param {object} action Событие
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case USER_FETCHED:
      return {
        ...state,
        ...payload
      }
    case USER_CLEAR:
      return initialState
    default:
      return state
  }
}
