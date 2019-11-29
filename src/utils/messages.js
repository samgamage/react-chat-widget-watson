import { Map } from "immutable";
import Message from "../components/Widget/components/Conversation/components/Messages/components/Message";
import {
  MESSAGES_TYPES,
  MESSAGE_BOX_SCROLL_DURATION,
  MESSAGE_SENDER
} from "../constants";

export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: Message,
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

/**
 * Easing Functions
 * @param {*} t timestamp
 * @param {*} b begining
 * @param {*} c change
 * @param {*} d duration
 */
function sinEaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

/**
 *
 * @param {*} target scroll target
 * @param {*} scrollStart
 * @param {*} scroll scroll distance
 */
function scrollWithSlowMotion(target, scrollStart, scroll) {
  const raf =
    window.webkitRequestAnimationFrame || window.requestAnimationFrame;
  let start = null;
  const step = timestamp => {
    if (!start) {
      start = timestamp;
    }
    let stepScroll = sinEaseOut(
      timestamp - start,
      0,
      scroll,
      MESSAGE_BOX_SCROLL_DURATION
    );
    let total = scrollStart + stepScroll;
    target.scrollTop = total;
    if (total < scrollStart + scroll) {
      raf(step);
    }
  };
  raf(step);
}

export function scrollToBottom(messagesDiv) {
  if (!messagesDiv) return;
  const screenHeight = messagesDiv.clientHeight;
  const scrollTop = messagesDiv.scrollTop;

  const scrollOffset = messagesDiv.scrollHeight - (scrollTop + screenHeight);

  scrollOffset && scrollWithSlowMotion(messagesDiv, scrollTop, scrollOffset);
}
