import { GET_USERS, GET_SCORES } from '../actions/users'

export default function getUsers (state = {}, action ) {
  switch(action.type){
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
