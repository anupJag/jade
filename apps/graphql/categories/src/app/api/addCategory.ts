import { ICategoryType } from '../types';
import CategoryModel from '../model';

export const addCategory = async (data: ICategoryType): Promise<ICategoryType> => {
  const doc = new CategoryModel(data);
  const result = await doc.save() as unknown;
  return result as ICategoryType;
};
