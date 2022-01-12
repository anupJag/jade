import { CategoryTile } from '@jade/ui/organism/types';

export enum ActionTypes {
  SET_INITIAL_STATE = 'SET_INITIAL_STATE',
}

export type State = {
  categories: CategoryTile[];
};

export type SetInitialStateAction = {
  type: ActionTypes.SET_INITIAL_STATE;
  payload: {
    categories: CategoryTile[];
  };
};

export type EmptyAction = { type: '' };

export type Action = SetInitialStateAction | EmptyAction;
