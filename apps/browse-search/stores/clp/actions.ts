import { Action, ActionTypes } from './types';
import { CategoryTile } from '@jade/ui/organism/types';

export const setInitialState = (categories: CategoryTile[], dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.SET_INITIAL_STATE,
    payload: {
      categories,
    },
  });
};
