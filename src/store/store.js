import { combineReducers, createStore } from "redux";
import behaviorReducer from "./reducers/behaviorReducer";
import configReducer from "./reducers/configReducer";
import messagesReducer from "./reducers/messagesReducer";

const reducer = combineReducers({
  messages: messagesReducer,
  behavior: behaviorReducer,
  config: configReducer
});

export default createStore(reducer);
