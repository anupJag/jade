import { IObject } from '../types';

import { fetchCart } from '../api';
import externalExp from './external';

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchCart: async (_parent: any, { userId, offer }: IObject, { dataSources }) =>
    await fetchCart(userId, dataSources, offer),
};
