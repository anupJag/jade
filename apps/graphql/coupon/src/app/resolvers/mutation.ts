import { IObject } from '../types';

import { createPromotion } from '../api';

//import { addToCart, deleteFromCart } from '../api';

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createPromotion: async (_parent: any, { promoDetails }: IObject) =>
    await createPromotion(promoDetails),
};
