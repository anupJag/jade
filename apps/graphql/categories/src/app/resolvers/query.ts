import { IObject } from '../types';

import { 
  getCategoryById, 
  getAllChildrenOfCategoryId,
  getCategories,
  getRootCategories
} from '../api';

export default {
  fetchCategoryById: async (parent: any, { id }: IObject) => await getCategoryById(id),
  fetchCategories: async () => await getCategories(),
  fetchRootCategories: async () => await getRootCategories(),
  fetchAllChildrenOfCategoryId: async (parent: any, { id }: IObject) => await getAllChildrenOfCategoryId(id)
};
