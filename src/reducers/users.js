import { GET_USERS } from '../actions/users'
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function getUsers (state = {}, action ) {
  switch(action.type){
    case ADD_QUESTION:
    const addQuestionIdToUser = () => {
    return state[action.question.author].questions.concat([action.question.id])
    }
    return {
      ...state,
      [action.question.author]: {
        ...state[action.question.author],
        questions: addQuestionIdToUser()
      }
    }
    case ANSWER_QUESTION:
    const addAnswerToUser = () => {
    return Object.assign(state[action.authedUser].answers, {[action.qid]: action.answer})
    }
    return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: addAnswerToUser()
        }
      }
    case GET_USERS:
    return {
      ...state,
      ...action.users
    }
    default:
    return state
  }
}
