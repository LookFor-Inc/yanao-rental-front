import {combineReducers} from 'redux'
import authReducer from '@/store/Auth/authReducer'
import equipmentAndRentalsReducer from '@/store/EquipmentAndRentals/equipmentAndRentalsReducer'
import userReducer from '@/store/User/userReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  equipmentAndRentals: equipmentAndRentalsReducer,
  user: userReducer
})
