import { ActionTypes, ErrorAction, ErrorPayload, UserAction, UserPayload } from './types';

export const updateAppError = (payload: ErrorPayload, dispatch: React.Dispatch<ErrorAction>) => {
  return dispatch({ type: ActionTypes.UPDATE_APP_ERROR, payload });
};

export const updateAppUser = (payload: UserPayload, dispatch: React.Dispatch<UserAction>) => {
  return dispatch({ type: ActionTypes.UPDATE_APP_USER, payload });
};
