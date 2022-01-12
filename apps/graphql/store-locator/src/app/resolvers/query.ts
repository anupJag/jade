import { IObject } from '../types';

import { fetchStoreById } from '../api';
import { fetchStores, fetchStoresByPostalcode } from '../api';

export default {
  fetchStore: async (_parent: any, { storeId }: IObject) => await fetchStoreById(storeId),
  fetchStores: async () => await fetchStores(),
  fetchStoresByPostalcode: async (_parent: any, { postalCode }: IObject) =>
    await fetchStoresByPostalcode(postalCode),
};
