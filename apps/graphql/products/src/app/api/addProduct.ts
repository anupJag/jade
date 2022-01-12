import { IProduct } from '../types';
import ProductModel from '../model';

export const addProduct = async (data: IProduct): Promise<IProduct> => {
  const doc = new ProductModel(data);
  const result = await doc.save();
  return result;
};
