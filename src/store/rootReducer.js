import {combineReducers} from 'redux'
import cartReducer from './Cart/cartReducer'

export const rootReducer = combineReducers({
  cart: cartReducer
})
