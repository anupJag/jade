import { Action, ActionTypes, State } from './types';
import { initialState } from './initialState';

const helpReducers = (state: State = initialState, action: Action = { type: '' }) => {
  switch (action.type) {
    case ActionTypes.SET_INITIAL_STATE:
      return {
        ...state,
        slotData: [...action.payload.slotData],
      };
    default:
      return state;
  }
};

export default helpReducers;
