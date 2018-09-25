import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'
import { formatQuestion } from './helpers'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

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

export function answerQuestion (answer) {
  return _saveQuestionAnswer(answer)
}

export function getAllQuestions () {
  return Promise.all([
    _getQuestions(),
  ]).then(([ questions ]) => ({
    questions,
  }))
}
