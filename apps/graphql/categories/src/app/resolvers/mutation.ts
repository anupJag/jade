import { IObject } from '../types';

import { 
  addCategory as addCategoryAPI,
} from '../api';

export default {
  addCategory: async (_parent: any, { details }: IObject) => await addCategoryAPI(details),
};
