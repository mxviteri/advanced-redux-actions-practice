
import { combineReducers } from 'redux';

const currentCount = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
    return state + 1
    case 'DECREASE_COUNTER':
    return state - 1

      default:
      return state
  }
}

const specialText = (state = "", action) => {
  switch (action.type) {
    case 
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
    return [...state,action.value]
    case 'REMOVE_USER':
    return state.slice(1)
      default:
      return state
  }
}

const specialText = (state = "", action) => {
  switch (action.type) {
    case 'SET_SPECIAL_TEXT':
      return action.value
      default:
      return state
  }
}

export default combineReducers({
  currentCount,
  speciaText,
  currentCity,
  users,
  currentTemp,
  isLoading,
  videoURL,
  searchText,
  currentUserSort,
  videoScale
})
// combine reducers (and export) here