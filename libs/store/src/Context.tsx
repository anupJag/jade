/** @context.tsx
 *  This component is a wrapper which will provide
 *  the Global Context to other needy components
 *  */

import React, { useReducer } from 'react';
import { initialState } from './initialState';
import reducer from './reducer';

// Creating global context
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const Context = React.createContext({ state: initialState, dispatch: () => {} });

// eslint-disable-next-line react/prop-types
export const GlobalContextProvider = ({ children, ssrAppState = {} }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...ssrAppState });

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
