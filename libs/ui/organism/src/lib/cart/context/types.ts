export enum ActionTypes {
  NOTIFY_CART_UPDATE = 'NOTIFY_CART_UPDATE',
  // TODO : future use => UPDATE_CART_LIST_DATA = 'UPDATE_CART_LIST_DATA',
}

export type NotifyCartUpdatePayload = { isCartUpdated: boolean };
export type NotifyCartUpdateAction = {
  type: ActionTypes.NOTIFY_CART_UPDATE;
  payload: NotifyCartUpdatePayload;
};

// TODO : future use => CartItem
/* export type CartItem = {
  defaultImageUrl: string;
  defaultImageUrlAlt: string;
  id: string;
  price: number;
  productUrl: string;
  quantity: number;
  title: string;
};

export type CartListPayload = { cartList: CartItem[] };
export type CartListAction = {
  type: ActionTypes.UPDATE_CART_LIST_DATA;
  payload: CartListPayload;
}; */

export type State = {
  isCartUpdated: boolean;
  // TODO : future use => cartList: CartItem[];
};
export type Action = NotifyCartUpdateAction; // TODO : future use =>| CartListAction;
