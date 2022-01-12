import { State } from './types';

export const initialState: State = {
  products: [],
  filters: [],
  appliedFilters: {},
  filteredProducts: [],
  productLoaded: false,
};
