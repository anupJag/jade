import { ICategoryType, Types } from '../types';
import CategoryModel from '../model';

export const getAllChildrenOfCategoryId = async (id: Types.ObjectId): Promise<ICategoryType | null> => {
  const result = await CategoryModel.find({ parentId: id}) as unknown;
  return result as ICategoryType;
};
