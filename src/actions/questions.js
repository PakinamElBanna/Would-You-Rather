import { saveQuestion, getAllQuestions, answerQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const ADD_QUESTION = 'ADD_QUESTION'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_UNANSWERED_QUESTIONS = 'GET_UNANSWERED_QUESTIONS'
export const GET_ANSWERED_QUESTIONS = 'GET_ANSWERED_QUESTIONS'
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

export function getQuestions ({questions}) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

export function getUnansweredQuestions ({questions, authedUser, users}) {
  return {
    type: GET_UNANSWERED_QUESTIONS,
    questions,
    authedUser,
    users
  }
}

export function getAnsweredQuestions ({questions, authedUser, users}) {
  return {
    type: GET_ANSWERED_QUESTIONS,
    questions,
    authedUser,
    users
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

export function handleGetUnansweredQuestions() {
  let unansweredQuestions = {}
  return (dispatch, getState ) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return getAllQuestions()
    .then(({questions}) => {
      const { authedUser, users } = getState()
      dispatch(getUnansweredQuestions({questions, authedUser, users}))
      dispatch(hideLoading())
    })
  }
}

export function handleGetAnsweredQuestions() {
  let asweredQuestions = {}
  return (dispatch, getState ) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return getAllQuestions()
    .then(({questions}) => {
      const { authedUser, users } = getState()
      dispatch(getAnsweredQuestions({questions, authedUser, users}))
      dispatch(hideLoading())
    })
  }
}

export function handleGetQuestions() {
  return (dispatch) => {
    dispatch(showLoading())
    return getAllQuestions()
    .then((questions) => {
      dispatch(getQuestions(questions))
      dispatch(hideLoading())
    })
  }
}
