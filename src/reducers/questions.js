import { GET_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action ) {
  switch(action.type){
    case GET_QUESTIONS:
    return {
      ...state,
      ...action.questions
    }
    case ADD_QUESTION:
    return {
      ...state,
      [action.question.id]: action.question
    }
    case ANSWER_QUESTION:
    const { answer } = action
    const resetandAddVote = () => {
      let filteredState = state
        filteredState[action.qid]['optionOne'].votes = state[action.qid]['optionOne'].votes.filter((user) => user !== action.authedUser)
        filteredState[action.qid]['optionTwo'].votes = filteredState[action.qid]['optionTwo'].votes.filter((user) => user !== action.authedUser)
        state = filteredState
        return state[action.qid][answer].votes.concat([action.authedUser])
    }
    return {
      ...state,
      [action.qid]: {
        ...state[action.qid],
        [action.answer]: {
          ...state[action.qid][action.answer],
          votes:
            resetandAddVote()
        }
      }
    }
    default:
    return state
  }
}
