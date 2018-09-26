import { getAllUsers } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_USERS = 'GET_USERS'
export const GET_SCORES = 'GET_SCORES'

export function handleGetUsers() {
  return (dispatch) => {
    return getAllUsers()
    .then(({users}) => {
      dispatch(getUsers(users))
    })
  }
}

export function getUsers (users) {
  return {
    type: GET_USERS,
    users,
  }
}


function getUserScores ({users, questions}) {
  return {
    type: GET_SCORES,
    users,
    questions
  }
}

export function handleGetUserScores() {
  return ( dispatch, getState ) => {
    const {users, questions} = getState()
    dispatch(showLoading())
    dispatch(getUserScores({
      users,
      questions,
    }))
    dispatch(hideLoading())
  }
}
