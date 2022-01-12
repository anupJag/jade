import { IObject } from '../types';

import { getProductById, getProducts, searchProducts, getPLPData, getProductBySku } from '../api';

export default {
  fetchProduct: async (parent: any, { id }: IObject) => await getProductById(id),
  fetchProductBySku: async (parent: any, { skuId }: IObject) => await getProductBySku(skuId),
  fetchProducts: async () => await getProducts(),
  searchProducts: async (parent: any, { searchText }: IObject) => await searchProducts(searchText),
  getFacets: async (parent: any, { details }: IObject) => await getPLPData(details),
};
