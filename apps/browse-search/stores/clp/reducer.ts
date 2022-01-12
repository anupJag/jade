import { Action, ActionTypes, State } from './types';
import { initialState } from './initialState';

const clpReducers = (state: State = initialState, action: Action = { type: '' }) => {
  switch (action.type) {
    case ActionTypes.SET_INITIAL_STATE:
      return {
        ...state,
        categories: [...action.payload.categories],
      };
    default:
      return state;
  }
};

export default clpReducers;
