import { GET_UNANSWERED_QUESTIONS, GET_ANSWERED_QUESTIONS, GET_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action ) {
  switch(action.type){
    case GET_QUESTIONS:
    return {
      ...state,
      ...action.questions
    }
    case GET_UNANSWERED_QUESTIONS:
    let unansweredQuestionKeys = Object.keys(action.users[action.authedUser].answers)
    action.questions = Object.keys(action.questions).filter(key => !unansweredQuestionKeys.includes(key)).reduce((obj, key) => {obj[key] = action.questions[key]
    return obj;
    }, {});
    return {
      ...state,
      ...action.questions
    }
    case GET_ANSWERED_QUESTIONS:
    let answeredQuestionKeys = Object.keys(action.users[action.authedUser].answers)
    action.questions = Object.keys(action.questions).filter(key => answeredQuestionKeys.includes(key)).reduce((obj, key) => {obj[key] = action.questions[key]
    return obj;
    }, {});
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
