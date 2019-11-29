export const createReducer = (reducer, state, action) =>
  reducer[action.type] ? reducer[action.type](state, action) : state;
