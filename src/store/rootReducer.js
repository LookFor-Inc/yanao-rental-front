import {combineReducers} from 'redux'
import authReducer from '@/store/Auth/authReducer'
import equipmentAndRentalsReducer from '@/store/EquipmentAndRentals/equipmentAndRentalsReducer'
import rentalReducer from '@/store/Rental/rentalReducer'
import cartReducer from './Cart/cartReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  equipmentAndRentals: equipmentAndRentalsReducer,
  rentalTab: rentalReducer
})
