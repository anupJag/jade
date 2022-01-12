import gql from 'graphql-tag';

export const MUTATE_DELETE_FROM_CART = gql`
  mutation deleteFromCart($details: DeleteFromCart!) {
    deleteFromCart(details: $details) {
      id
      productId
      quantity
    }
  }
`;

export interface DeleteFromCart {
  addedBy: string;
  id: string;
}

export const deleteFromCartVarFn = ({ addedBy, id }: DeleteFromCart) => ({
  details: {
    addedBy,
    id,
  },
});
