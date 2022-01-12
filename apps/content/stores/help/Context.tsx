/** @context.tsx
 *  */

import React, { FC, useReducer } from 'react';
import { initialState } from './initialState';
import reducer from './reducer';
import { Action, State } from './types';

interface HelpContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const HelpContext = React.createContext<HelpContextProps>({
  state: initialState,
} as HelpContextProps);

// eslint-disable-next-line react/prop-types
const HelpContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <HelpContext.Provider value={{ state, dispatch }}>{children}</HelpContext.Provider>;
};

export default HelpContextProvider;
