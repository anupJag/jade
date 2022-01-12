import { State, Action } from './types';
import { initialState } from './initialState';

const contentReducers = (state: State = initialState, action: Action = { type: '' }) => {
  return state;
};

export default contentReducers;
