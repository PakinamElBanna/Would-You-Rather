import { GET_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action ) {
  switch(action.type){
    case GET_QUESTIONS:
    return {
      ...state,
      ...action.questions
    }
    case ADD_QUESTION:
    const { question } = action.question
    return {
      ...state,
      [action.question.id]: action.question
    }
    default:
    return state
  }
}
