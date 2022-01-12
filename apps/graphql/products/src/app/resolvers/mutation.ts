import { IObject } from '../types';

import { addProduct as addProductAPI } from '../api';

export default {
  addProduct: async (_parent: any, { details }: IObject) => await addProductAPI(details),
};
