import { List } from "immutable";
import { MESSAGE_SENDER } from "../../constants";
import { createNewMessage } from "../../utils/messages";
import { createReducer } from "../../utils/store";
import * as actionTypes from "../actions/actionTypes";

const initialState = List([]);

const messagesReducer = {
  [actionTypes.ADD_NEW_USER_MESSAGE]: (state, { text }) =>
    state.push(createNewMessage(text, MESSAGE_SENDER.CLIENT))
};

export default (state = initialState, action) =>
  createReducer(messagesReducer, state, action);
