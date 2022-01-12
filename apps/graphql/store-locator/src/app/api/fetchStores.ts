import { IStore } from '../types';
import StoreModel from '../model';

export const fetchStores = async (): Promise<IStore[]> => {
  const stores = await StoreModel.find({});
  return stores;
};

export const fetchStoresByPostalcode = async (postalCode): Promise<IStore[]> => {
  const stores = await StoreModel.find({ 'address.postalCode': postalCode });
  return stores;
};
