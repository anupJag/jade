import { Product } from '@jade/ui/organism/types';
import { Filter, PriceFilterRange, ValueFilterRange } from '@jade/ui/molecules/types';

export enum ActionTypes {
  SET_INITIAL_STATE = 'SET_INITIAL_STATE',
}

export type FilterKey =
  | 'price'
  | 'rating'
  | 'discount'
  | 'category'
  | 'shippingTags'
  | 'brand'
  | 'reviewCount';

export type AppliedFilters = {
  price?: PriceFilterRange[];
  rating?: ValueFilterRange[];
};

export type State = {
  products: Product[];
  filters: Filter[];
  appliedFilters: AppliedFilters;
  filteredProducts: Product[];
  productLoaded: boolean;
};

export type SetInitialStateAction = {
  type: ActionTypes.SET_INITIAL_STATE;
  payload: {
    products: Product[];
    filters: Filter[];
  };
};

export type EmptyAction = { type: '' };

export type Action = SetInitialStateAction | EmptyAction;
