import { IProduct } from '../types';
import ProductModel from '../model';

export const getProducts = async (): Promise<IProduct[]> => {
  const result = await ProductModel.find();
  return result;
};
