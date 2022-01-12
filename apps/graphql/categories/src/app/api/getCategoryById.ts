import { ICategoryType, Types } from '../types';
import CategoryModel from '../model';

export const getCategoryById = async (id: Types.ObjectId): Promise<ICategoryType | null> => {
  const result = await CategoryModel.findById(id) as unknown;
  return result as ICategoryType;
};
