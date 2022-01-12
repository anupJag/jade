import { IProduct, Types } from '../types';
import ProductModel from '../model';

export const getProductById = async (skuId: string): Promise<IProduct | null> => {
  // TODO - This is temporary - once getProductBySku is merged, this has to be restored
  const result = await ProductModel.findOne({ sku: skuId });
  return result;
};
