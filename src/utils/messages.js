import { Map } from "immutable";
import uuid from "uuid";
import Message from "../components/Message";
import { MESSAGES_TYPES, MESSAGE_SENDER } from "../constants";

export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    id: uuid.v4(),
    text,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE
  });
}

export function createComponentMessage(component, props, showAvatar) {
  return Map({
    type: MESSAGES_TYPES.CUSTOM_COMPONENT,
    component,
    props,
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar
  });
}
