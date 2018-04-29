import { combineReducers } from 'redux'
import placeholderReducer from './Placeholder'

export default combineReducers({
  placeholder: placeholderReducer
})