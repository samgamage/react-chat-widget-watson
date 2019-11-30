import * as actions from "./actions";
import store from "./store";

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function addResponseMessage(text) {
  store.dispatch(actions.addResponseMessage(text));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function isWidgetOpened() {
  return store.getState().behavior.get("showChat");
}
