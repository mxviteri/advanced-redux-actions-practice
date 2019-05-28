export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER"
  }
}

export const decreaseCounter = () => {
  return {
    type: "DECREASE_COUNTER"
  }
}

export const setSpecialText = (txt) => {
  return {
    type: "SET_SPECIAL_TEXT",
    value: txt
  }
}

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    value: user
  }
}

export const removeUser = (user) => {
  return {
    type: "REMOVE_USER",
    value: user
  }
}

export const setTemp = (temp) => {
  return {
    type: "SET_TEMP",
    value: temp
  }
}

export const setCurrentCity = (city) => {
  return {
    type: "SET_CURRENT_CITY",
    value = city
  }
}

export const setIsLoading = (txt) => {
  return {
    type: "SET_IS_LOADING",
    value: txt
  }
}

export const setVideoURL = (url) => {
  return { 
    type: "SET_VIDEO_URL", 
    value: url
  }
}

export const setSearchText = (txt) => {
  return { 
    type: "SET_SEARCH_TEXT",
    value: txt
  }
}

export const setCurrentUserSort = (sort) => {
  return {
    type: "SET_CURRENT_USER_SORT",
    value: sort
  }
}

export const setVideoScale = (scale) => {
  return {
    type: "SET_VIDEO_SORT",
    value: scale
  }
}

