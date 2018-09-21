import { combineReducers } from 'redux'
import authedUser from './authedUser'
import selectedUser from './selectedUser'
import users from './users'

export default combineReducers({
  selectedUser,
  authedUser,
  users,
})
