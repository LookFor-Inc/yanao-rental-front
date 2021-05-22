import {combineReducers} from 'redux'
import authReducer from '@/store/Auth/authReducer'
import equipmentAndRentalsReducer from '@/store/EquipmentAndRentals/equipmentAndRentalsReducer'
import rentalReducer from '@/store/Rental/rentalReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  equipmentAndRentals: equipmentAndRentalsReducer,
  rentalTab: rentalReducer
})
