import { combineReducers, createStore } from "redux";
import behaviorReducer from "./reducers/behaviorReducer";
import messagesReducer from "./reducers/messagesReducer";

const reducer = combineReducers({
  messages: messagesReducer,
  behavior: behaviorReducer
});

export default createStore(reducer);
