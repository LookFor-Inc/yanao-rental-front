import {combineReducers} from 'redux'
import orderReducer from './Order/orderReducer'

export const rootReducer = combineReducers({
  order: orderReducer
})
