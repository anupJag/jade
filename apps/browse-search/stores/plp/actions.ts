import { Action, ActionTypes } from './types';
import { Product } from '@jade/ui/organism/types';
import { Filter } from '@jade/ui/molecules/types';

export const setInitialState = (
  products: Product[],
  filters: Filter[],
  dispatch: React.Dispatch<Action>,
) => {
  dispatch({
    type: ActionTypes.SET_INITIAL_STATE,
    payload: {
      products,
      filters,
    },
  });
};
