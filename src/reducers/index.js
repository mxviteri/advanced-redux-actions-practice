
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
    case 'SET_SPECIAL_TEXT':
    return action.value

    default:
    return state
  }
}

const currentCity = (state = "", action) => {
  switch (action.type) {
    case 'SET_CURRENT_CITY':
    return action.value
    
    default: 
    return state
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

const currentTemp = (state = 0, action) => {
  switch (action.type) {
    case 'SET_TEMP':
    return action.value
    
      default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
    return action.value

      default: 
      return state
  }
}

const videoURL = (state = "", action) => {
  switch (action.type) {
    case 'SET_VIDEO_URL':
    return action.value

      default:
      return state
  }
}

const searchText = (state = "", action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
    return action.value

      default: 
      return state
  }
}

const currentUserSort = (state = "first_name", action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_SORT':
    return action.value

      default:
      return state 
  }
}

const videoScale = (state = "1", action) => {
  switch (action.type) {
    case 'SET_VIDEO_SCALE':
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