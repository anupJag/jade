import gql from 'graphql-tag';

export const QUERY_APPLICABLE_PROMOTIONS = gql`
  query fetchApplicablePromotions($minOrderAmount: Float!) {
    fetchApplicablePromotions(minOrderAmount: $minOrderAmount) {
      id
      longDescription
      promoType
      condition {
        maximumDiscountAmount
      }
      reward {
        percOff
        amountOff
      }
    }
  }
`;

export interface MinOrderAmount {
  minOrderAmount: any;
}

export const getApplicablePromotionsFn = ({ minOrderAmount }: MinOrderAmount) => ({
  minOrderAmount,
});
