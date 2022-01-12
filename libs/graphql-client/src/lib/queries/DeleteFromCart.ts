import gql from 'graphql-tag';

export const MUTATE_DELETE_FROM_CART = gql`
  mutation deleteFromCart($details: DeleteFromCart!) {
    deleteFromCart(details: $details) {
      addedBy
      id
    }
  }
`;

export interface DeleteFromCart {
  addedBy: string;
  id: string;
}

export const deleteFromCartVarsFn = ({ addedBy, id }: DeleteFromCart) => ({
  details: {
    addedBy,
    id,
  },
});
