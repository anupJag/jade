import { ICategoryType } from '../types';
import CategoryModel from '../model';

export const getCategories = async (): Promise<ICategoryType[]> => {
  const result = await CategoryModel.find() as unknown;
  return result as ICategoryType[];
};
