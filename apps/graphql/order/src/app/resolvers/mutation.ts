import { IObject } from '../types';

import { addToCart, deleteFromCart } from '../api';

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addToCart: async (_parent: any, { details }: IObject) => await addToCart(details),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteFromCart: async (_parent: any, { details }: IObject) => await deleteFromCart(details),
};
