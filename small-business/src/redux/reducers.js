
import { combineReducers } from 'redux'
import cookie from 'cookie'

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



const listings = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LISTING':
      const lastItem = state[state.length-1]
      action.value.id = lastItem.id + 1
      return [...state, action.value]
    case 'DELETE_LISTING':
      const listings = [...state]
      listings.splice(action.value, 1)
      return listings
    default:
      return state
  }
}

export default combineReducers({user, listings})