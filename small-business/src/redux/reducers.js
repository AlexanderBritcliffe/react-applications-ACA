import { combineReducers } from 'redux'


const user = (state = [], action) => {
  switch(action.type) {
    case "LOGIN_COMPLETE":
      return {
        ...action.value,
        loggedIn: true,
      }
    case "LOGOUT_COMPLETE":
      return {
        ...state,
        user: null,
        loggedIn: false,
      }
    default:
      return user
  }
}

const bars = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BAR':
      const lastItem = state[state.length-1]
      action.value.id = lastItem.id + 1
      return [...state, action.value]
    case 'DELETE_BAR':
      const bars = [...state]
      bars.splice(action.value, 1)
      return bars
    default:
      return state
  }
}

export default combineReducers({user, bars})