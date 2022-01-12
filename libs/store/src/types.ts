import { AppProps } from 'next/app';

export enum ActionTypes {
  UPDATE_APP_ERROR = 'UPDATE_APP_ERROR',
  UPDATE_APP_USER = 'UPDATE_APP_USER',
}

export type User = {
  id: string;
  firstName: string;
  lastName?: string;
  profilePicture?: string;
  provider?: any;
  facebookId?: string;
  googleId?: string;
  role?: string;
  email: string;
  phoneNumber?: string;
  access?: any;
  refresh?: any;
};
export type UserPayload = { user: User };
export type UserAction = { type: ActionTypes.UPDATE_APP_USER; payload: UserPayload };

export type ErrorPayload = { isError: boolean; errorInfo: object };
export type ErrorAction = { type: ActionTypes.UPDATE_APP_ERROR; payload: ErrorPayload };

export type EmptyAction = { type: '' };

export type Action = UserAction | ErrorAction | EmptyAction;

export type GlobalLabels = {
  offersLabel: string;
};

export type State = {
  user: User | null;
  isError: boolean;
  errorInfo?: object;
  label?: GlobalLabels | any;
  config?: any;
};

export type GlobalAppProps = AppProps & { globalConfigs: State };
