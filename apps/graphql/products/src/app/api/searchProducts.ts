import { IProduct } from '../types';
import ProductModel from '../model';

export const searchProducts = async (searchText: string): Promise<IProduct | null> => {
  const result = await ProductModel.find({
    title: { $regex: `^${searchText}`, $options: 'i' },
  }).limit(6) as unknown;

  return result as IProduct;
};
