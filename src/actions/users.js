import { getAllUsers } from '../utils/api'

export const GET_USERS = 'GET_USERS'

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
