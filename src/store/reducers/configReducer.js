import { Map } from "immutable";
import { createReducer } from "../../utils/store";

const initialState = Map({
  config: (window.Dfschat && window.Dfschat.config) || {},
  appearance: (window.Dfschat && window.Dfschat.appearance) || {}
});

const configReducer = {};

export default (state = initialState, action) =>
  createReducer(configReducer, state, action);
