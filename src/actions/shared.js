import { getInitialData } from '../utils/api'
import { getUsers } from './users'
import { getQuestions } from './questions'
import { setAuthedUser } from './authedUser'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({users, tweets}) => {
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
