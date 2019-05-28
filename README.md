# Make sure to do one thing at a time, save and refresh to check for errors
### Setup
Fork, clone, npm i, npm start

### Intro
View this video to see how the app should work once you are done coding. [Video](https://youtu.be/R8VFic_ZZUc). This project is to practice using redux actions to control data that is changed through user interactions. On the left hand side of the page is a collection of different inputs that are available on a web page. When the user interacts with the input it will change some data that should update the right hand side of the page. All you need to do is code the redux containers such that it will connect redux actions and data to the components. You do not need to alter the existing components themselves. There is nothing out of the ordinary that needs to be done here so if you do not undersand the instruction exactly, try to relate it to how you already know what to do with redux.

###  Reducers -- A template has been provided 
  * Create Reducers in reducers/index.js

  * Look at state.js and create a reducer function for each piece of state. The function name should have the same name as the property of state you are referencing. See the next section.

  * Remember reducers take 2 parameters: `state`, and `action`

  * Remember to give the state parameter a default value appropriate for what type it is in the reducer. Number, string, array, object, etc. That means if the reducer is for `currentCount` which we know is a number by searching for "currentCount" in state.js, then set the default value equal to 0. If the reducer is called users, which we can see is an array (again in state.js) then use `[]` for the default value, etc.

  * Remember to return state if the reducer doesn't care about the action. That means, `return state` in the default switch case.

  * You will need to decide which reducer cares about which action type

  * Combine reducers and export. To combine reducers, import the `{ combineReducers }` function from `redux` and give it an object with all the reducers we just created.
    * `export default combineReducers({ ... })`

### Make these reducers
  * currentCount
    * if "INCREASE_COUNTER" or "DECREASE_COUNTER", it should return the current count plus one or minus one, depending on the action

  * specialText
    * if "SET_SPECIAL_TEXT", it should return the action value (`action.value`)

  * currentCity
    * if "SET_CURRENT_CITY", it should return the action value

  * users
    * if "REMOVE_USER" or "ADD_USER", it should return `state.slice(1)` to remove the first user or `[...state,action.value]` to add a user
  
  * currentTemp
    * if "SET_TEMP", it should return action value

  * isLoading
    * if "SET_IS_LOADING", it should return action value

  * videoURL
    * if "SET_VIDEO_URL", it should return action value

  * searchText
    * if "SET_SEARCH_TEXT", it should return action value

  * currentUserSort
    * if "SET_CURRENT_USER_SORT", it should return action value

  * videoScale
    * if "SET_VIDEO_SCALE", it should return action value

### Create Actions in actions/index.js -- A template has been provided
  * The actions are written below in sudo-code. Please write them the way the examples are written in actions/index.js

  * increaseCounter()
    * type = "INCREASE_COUNTER"

  * decreaseCounter()
    * type = "DECREASE_COUNTER"

  * setSpecialText(text)
    * type = "SET_SPECIAL_TEXT"
    * value = text

  * removeUser()
    * type = "REMOVE_USER"

  * addUser(user)
    * type = "ADD_USER"
    * value = user

  * setSearchText(text)
    * type = "SET_SEARCH_TEXT"
    * value = text

  * setIsLoading(isLoading)
    * type = "SET_IS_LOADING"
    * value = isLoading

  * setTemp(temp)
    * type = "SET_TEMP"
    * value = temp

  * setCurrentCity(city)
    * type = "SET_CURRENT_CITY"
    * value = city

  * setVideoURL(URL)
    * type = "SET_VIDEO_URL"
    * value = URL

  * setCurrentUserSort(sort)
    * type = "SET_CURRENT_USER_SORT"
    * value = sort

  * setVideoScale(scale)
    * type = "SET_VIDEO_SCALE"
    * value = scale

### Create Store -- This has been done for you
  * Create a store.js file
  * Import state from state.js
  * import `{ createStore }` from redux
  * import reducers from reducers
  * create the store
  * export the store

### Provide store to components -- You may copy from your last assignment
  * In index.js
  * Import `{ Provider }` from `react-redux`
  * Import store from store.js
  * Use Provider component to wrap App
  * Give Provider a prop “store” and the value of the store

### Containers
  * We are going to leave the logic for the components alone and create new containers. This helps make things easier to read and work with in the future.
  * In the container folder, create a container file for each component i.e. SpecialTextContainer.js
  * Import the appropriate component into the container file (see next section)
  * This is where the connect function and the actions should be imported
  * This is where mapStateToProps and mapDispatchToProps should be
  * This is where you should do the connecting
  * Export the container

### Create these Containers that care about what the data is -- mapStateToProps
  * Import `{ connect }` from `react-redux` into all containers
  * Import the appropriate component into the container
  * Create `mapStateToProps` function 
  * Call the `connect` function and export: `export default connect(mapStateToProps, null)(<COMPONENT>)`

  * SpecialTextContainer.js
    * map a prop called `text` to the state `specialText`
_______
 * UsersContainer.js
    * map a prop called `users` to the state `users`
    * map a prop called `firstNameFilter` to the state `searchText`
    * map a prop called `sortOn` to the state `currentUserSort`

  * CounterContainer.js
    * map a prop called `count` to the state `currentCount`

  * CurrentCityContainer.js
    * map a prop called `text` to the state `currentCity`

  * ThermostatContainer.js
    * map a prop called `temp` to the state `currentTemp`

  * VideoPlayerContainer.js
    * map a prop called `URL` to the state `videoURL`
    * map a prop called `scale` to the state `videoScale`

  * ModalContainer.js
    * map a prop called `isLoading` to the state `isLoading`

### Create these Containers that care about changing the data -- mapDispatchToProps
  * Import `{ connect }` from `react-redux` into all containers
  * Import the appropriate component into the container
  * Create `mapDispatchToProps` function 
  * Call the `connect` function and export: `export default connect(null, mapDispatchToProps)(<COMPONENT>)`

  * SpecialTextBoxContainer.js
    * import `setSpecialText` action
    * map prop `set` to action `setSpecialText`

  * UserButtonsContainer.js
    * import `addUser` and `removeUser` action
    * map prop `add` to action `addUser`
    * map prop `remove` to action `removeUser`

  * CityDropDownContainer.js
    * import `setCurrentCity` action
    * map prop `set` to action `setCurrentCity`

  * CounterButtonContainer.js
    * import the increaseCounter and decreaseCounter actions
    * map prop `increase` to action `increaseCounter`
    * map prop `decrease` to action `decreaseCounter`

  * SearchTextBoxContainer.js
    * import `setSearchText` action
    * map prop `set` to action `setSearchText`

  * ChangeTemperatureContainer.js
    * import `setTemp` action
    * map prop `set` to action `setTemp`

  * VideoTextBoxContainer.js
    * import `setVideoURL` action
    * map prop `set` to action `setVideoURL`

  * SortUsersContainer.js
    * import `setCurrentUserSort` action
    * map prop `set` to action `setCurrentUserSort`

  * ScaleVideoContainer.js
    * import `setVideoScale` action
    * map prop `set` to action `setVideoScale`
    
  * ShowModalContainer.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`

  * ModalContainer.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`

### App
  * Change App.js
  * Use containers instead of components
  * Basically, just add the word Container everywhere a component is referenced
  * You can simply change the import from `./components/SetSpecialText` to `./containers/SetSpecialText` for example



