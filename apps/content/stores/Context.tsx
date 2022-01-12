/** @context.tsx
 *  This component is a wrapper which will provide
 *  the Global Context to other needy components
 *  */

import React, { useReducer } from 'react';
import { initialState } from './initialState';
import reducer from './reducer';
import { Action, State } from './types';

interface ContentContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const ContentContext = React.createContext<ContentContextProps>({
  state: initialState,
} as ContentContextProps);

// eslint-disable-next-line react/prop-types
export const ContentContextProvider = ({ children, ssrAppState = {} }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...ssrAppState });

  return <ContentContext.Provider value={{ state, dispatch }}>{children}</ContentContext.Provider>;
};
