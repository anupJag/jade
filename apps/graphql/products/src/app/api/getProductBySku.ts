import { IProduct, Types } from '../types';
import ProductModel from '../model';

export const getProductBySku = async (skuId: string): Promise<IProduct | null> => {
  const result = await ProductModel.findOne({ sku: skuId });
  return result;
};
