import { Action, ActionTypes, State } from './types';
import { initialState } from './initialState';

const plpReducers = (state: State = initialState, action: Action = { type: '' }) => {
  switch (action.type) {
    case ActionTypes.SET_INITIAL_STATE:
      return {
        ...state,
        products: [...action.payload.products],
        filteredProducts: [...action.payload.products],
        filters: [...action.payload.filters],
        appliedFilters: {},
        productLoaded: true,
      };
    default:
      return state;
  }
};

export default plpReducers;
