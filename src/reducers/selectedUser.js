import { SET_SELECTED_USER } from '../actions/selectedUser'

export default function selecteddUser (state = null, action){
  switch(action.type) {
    case SET_SELECTED_USER:
      return action.id
    default:
      return state
  }
}
