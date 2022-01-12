/**
 * Resolvers for external entities extened / referenced from/by other services
 *
 * Name of resolvers should match with schema defined
 *
 */

export default {
  /**
   * Here we are passing productId which required by
   * an entity defined in other service
   */
  CartItemWithProduct: {
    product(cartItem) {
      return { __typename: 'Product', id: cartItem.productId };
    },
  },
};
