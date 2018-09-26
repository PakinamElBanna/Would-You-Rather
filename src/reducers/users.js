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
    let users = {}
    for (var user in action.users ) {
    action.users[user]['questionsCreated'] = Object.keys(action.users[user].questions).length
    action.users[user]['answeredQuestions'] = Object.keys(action.users[user].answers).length
    action.users[user]['score'] = (Object.keys(action.users[user].answers).length) + (Object.keys(action.users[user].questions).length)
    }
    return {
      ...state,
      ...action.users
    }
    default:
    return state
  }
}
