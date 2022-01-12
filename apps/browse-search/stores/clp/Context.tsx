/** @context.tsx
 *  This component is a wrapper which will provide
 *  the Global Context to other needy components
 *  */

import React, { FC, useReducer } from 'react';
import { initialState } from './initialState';
import reducer from './reducer';
import { Action, State } from './types';

interface CLPContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const CLPContext = React.createContext<CLPContextProps>({
  state: initialState,
} as CLPContextProps);

// eslint-disable-next-line react/prop-types
const CLPContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CLPContext.Provider value={{ state, dispatch }}>{children}</CLPContext.Provider>;
};

export default CLPContextProvider;
