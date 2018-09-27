import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

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
  return _saveQuestion(info.question)
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
