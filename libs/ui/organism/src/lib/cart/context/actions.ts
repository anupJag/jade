import { ActionTypes, NotifyCartUpdateAction, NotifyCartUpdatePayload } from './types';

export const notifyCartUpdate = (
  payload: NotifyCartUpdatePayload,
  dispatch: React.Dispatch<NotifyCartUpdateAction>,
) => {
  return dispatch({ type: ActionTypes.NOTIFY_CART_UPDATE, payload });
};

/* export const updateCartList = (
  payload: CartListPayload,
  dispatch: React.Dispatch<CartListAction>,
) => {
  return dispatch({ type: ActionTypes.UPDATE_CART_LIST_DATA, payload });
};
 */
