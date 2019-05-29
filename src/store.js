import { createStore } from 'redux';
import state from "./state";
import reducers from "./reducers";

export default createStore(reducers, state);
