import gql from 'graphql-tag';

export const MUTATE_ADD_TO_CART = gql`
  mutation addToCart($details: AddToCart!) {
    addToCart(details: $details) {
      id
      productId
      quantity
    }
  }
`;

export interface AddToCart {
  addedBy: string;
  productId: string;
  quantity: number;
}

export const addToCartVarsFn = ({ addedBy, productId, quantity }: AddToCart) => ({
  details: {
    addedBy,
    productId,
    quantity,
  },
});
