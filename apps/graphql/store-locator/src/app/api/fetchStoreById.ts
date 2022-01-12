import { IStore } from '../types';
import StoreModel from '../model';

export const fetchStoreById = async (storeId: any): Promise<IStore> => {
  const store = await StoreModel.findById(storeId);
  return store;
};
