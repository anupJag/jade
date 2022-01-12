import { Action, ActionTypes, State } from './types';
import { initialState } from './initialState';

const globalReducer = (state: State = initialState, action: Action = { type: '' }) => {
  switch (action.type) {
    case ActionTypes.UPDATE_APP_ERROR:
      return {
        ...state,
        errorInfo: { ...action.payload.errorInfo },
        isError: action.payload.isError,
      };
    case ActionTypes.UPDATE_APP_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

export default globalReducer;
