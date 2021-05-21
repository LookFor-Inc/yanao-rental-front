import {combineReducers} from 'redux'
import authReducer from '@/store/Auth/authReducer'
import equipmentAndRentalsReducer from '@/store/EquipmentAndRentals/equipmentAndRentalsReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  equipmentAndRentals: equipmentAndRentalsReducer
})
