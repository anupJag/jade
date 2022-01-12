/**
 * Resolvers for external entities extened / referenced from/by other services
 *
 * Name of resolvers should match with schema defined
 *
 */

import { getProductById } from '../api';

export default {
  /**
   * Here we are fetching data required by
   * an entity defined in other service
   */
  Product: {
    __resolveReference(reference) {
      return getProductById(reference.id);
    },
  },
  Filter: {
    __resolveType(filter) {
      switch (filter.type) {
        case 'range': return 'RangeFilter';
        case 'value': return 'ValueFilter';
      }
    },
  },
};
