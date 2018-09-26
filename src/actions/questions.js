import { saveQuestion, answerQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const ADD_QUESTION = 'ADD_QUESTION'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function answerQuestionAndSave({ authedUser, qid, answer }) {
  return {
  type: ANSWER_QUESTION,
  authedUser,
  qid,
  answer
  }
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

export function handleAddQuestion(question) {
    return ( dispatch, getState ) => {
      dispatch(showLoading())
      const { authedUser } = getState()
      return saveQuestion({
        question,
        author: authedUser,
      })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(hideLoading())
      })
    }
}

export function handleAnswerQuestion(questionAnswer) {
  return ( dispatch ) => {
    dispatch(showLoading())
    dispatch(answerQuestionAndSave(questionAnswer))
    return answerQuestion(questionAnswer)
    .then(() => dispatch(hideLoading()))
    .catch((e) => {
      console.warn('Error in voting:', e)
      dispatch(answerQuestionAndSave(questionAnswer))
      alert('There was an error voting for this poll. Try again.')
})
  }
}
