import gql from 'graphql-tag';

export const QUERY_CART_DETAILS = gql`
  query getCartItems($userId: ID!, $offer: Offer) {
    cart: fetchCart(userId: $userId, offer: $offer) {
      bag {
        id
        productId
        quantity
        product {
          id
          title
          pricing {
            list
            retail
          }
          productUrl
          images {
            url
            altText
            isDefault
          }
        }
        itemTotal
      }
      bagTotal
      discountedPrice
      grandTotal
    }
  }
`;

export interface UserID {
  userId: string;
  offer?: {
    promotionType?: string;
    reward?: {
      percOff?: number;
      amountOff?: number;
      maxDiscount?: number;
    };
  };
}

export const getCartDetailsVarFn = ({ userId, offer }: Partial<UserID>) => ({
  userId,
  offer,
});
