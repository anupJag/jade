export enum ActionTypes {
  SET_INITIAL_STATE = 'SET_INITIAL_STATE',
};

export type SlotData = {
  moduleName: string;
  data: [];
};

export type State = {
  slotData: SlotData[];
};

export type SetInitialStateAction = {
  type: ActionTypes.SET_INITIAL_STATE;
  payload: {
    slotData: SlotData[];
  };
};

export type EmptyAction = { type: '' };

export type Action = SetInitialStateAction | EmptyAction;
