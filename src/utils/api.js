import {
  _getUsers,
  _saveQuestion
} from './_DATA.js'
import { formatQuestion } from './helpers'

export function getAllUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}

export function saveQuestion (info) {
  return _saveQuestion(formatQuestion(info))
}
