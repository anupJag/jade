import { IAddStore, IStore } from '../types';
import StoreModel from '../model';

export const addStore = async (data: IAddStore): Promise<IStore> => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new StoreModel({ ...data });
      const result = await doc.save();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
