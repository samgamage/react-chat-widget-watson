import * as actions from "./actions";
import store from "./store";

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}
