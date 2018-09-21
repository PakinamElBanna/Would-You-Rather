export const SET_SELECTED_USER = 'SET_SELECTED_USER '

export function setSelectedUser (id) {
  return {
    type: SET_SELECTED_USER,
    id,
  }
}
