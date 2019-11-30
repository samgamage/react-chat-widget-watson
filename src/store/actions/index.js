import * as actions from "./actionTypes";

export function addUserMessage(text) {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    text
  };
}

export function addResponseMessage(text) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text
  };
}

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT
  };
}
