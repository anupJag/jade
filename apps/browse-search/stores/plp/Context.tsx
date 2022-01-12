/** @context.tsx
 *  This component is a wrapper which will provide
 *  the Global Context to other needy components
 *  */

import React, { FC, useReducer } from 'react';
import { initialState } from './initialState';
import reducer from './reducer';
import { Action, State } from './types';

interface PLPContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const PLPContext = React.createContext<PLPContextProps>({
  state: initialState,
} as PLPContextProps);

// eslint-disable-next-line react/prop-types
const PLPContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <PLPContext.Provider value={{ state, dispatch }}>{children}</PLPContext.Provider>;
};

export default PLPContextProvider;
