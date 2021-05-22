import {combineReducers} from 'redux'
import authReducer from '@/store/Auth/authReducer'
import equipmentAndRentalsReducer from '@/store/EquipmentAndRentals/equipmentAndRentalsReducer'
import userReducer from '@/store/User/userReducer'
import cartReducer from './Cart/cartReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  equipmentAndRentals: equipmentAndRentalsReducer,
  user: userReducer
})
