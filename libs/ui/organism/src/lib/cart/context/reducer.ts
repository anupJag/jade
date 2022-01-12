import { Action, ActionTypes, State } from './types';
import { initialState } from './initialState';

const CartReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.NOTIFY_CART_UPDATE:
      return { ...state, isCartUpdated: action.payload.isCartUpdated };
    // case ActionTypes.UPDATE_CART_LIST_DATA:
    //   return { ...state, isCartUpdated: false, cartList: action.payload.cartList };
    default:
      return state;
  }
};

export default CartReducer;
