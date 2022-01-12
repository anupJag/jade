/**
 * Resolvers for external entities extened / referenced from/by other services
 *
 * Name of resolvers should match with schema defined
 *
 */

import { getCategoryById } from '../api';

export default {
  /**
   * Here we are fetching data required by
   * an entity defined in other service
   */
  Category: {
    __resolveReference(reference) {
      return getCategoryById(reference.id);
    }
  }
};
