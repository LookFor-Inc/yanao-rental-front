import {combineReducers} from 'redux'
import authReducer from '@/store/Auth/authReducer'

export const rootReducer = combineReducers({
  auth: authReducer
})
