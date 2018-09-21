import {
  _getUsers
} from './_DATA.js'

export function getAllUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}
