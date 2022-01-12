import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import { initialState } from './initialState';
import { State } from './types';

interface Context {
  state: State;
  dispatch: any;
}
const contextValue: Context = {
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: (): void => {},
};

export const CartContext = createContext(contextValue);

export const CartContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </CartContext.Provider>
  );
};
