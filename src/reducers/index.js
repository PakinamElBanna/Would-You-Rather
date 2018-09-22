import { combineReducers } from 'redux'
import authedUser from './authedUser'
import selectedUser from './selectedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
  selectedUser,
  authedUser,
  users,
  questions
})
