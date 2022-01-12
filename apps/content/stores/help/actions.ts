import { Action, ActionTypes } from './types';


export type SlotData = {
  moduleName: string;
  data: [];
};

export const setInitialState = (
  slotData: SlotData[],
  dispatch: React.Dispatch<Action>,
) => {
  dispatch({
    type: ActionTypes.SET_INITIAL_STATE,
    payload: {
      slotData,
    },
  });
};

