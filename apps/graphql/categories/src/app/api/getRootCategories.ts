import { ICategoryType } from '../types';
import CategoryModel from '../model';

export const getRootCategories = async (): Promise<ICategoryType[]> => {
  const result: unknown = await CategoryModel.find({ parentId: null });
  return result as ICategoryType[];
};
