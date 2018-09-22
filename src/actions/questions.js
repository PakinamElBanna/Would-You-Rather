import { saveQuestion } from '../utils/api'
export const ADD_QUESTION = 'ADD_QUESTION'
export const GET_QUESTIONS = 'GET_QUESTIONS'

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

export function handleAddQuestion(question) {
    return ( dispatch, getState ) => {
      const {authedUser} = getState()
      return saveQuestion({
        question,
        author: authedUser,
      })
      .then((question) => dispatch(addQuestion(question)))
    }
}
