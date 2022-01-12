import gql from 'graphql-tag';
import {
  PRODUCT_IMAGES,
  UNIT_OF_MEASURE,
  RATING,
  BRAND,
  PRICE,
} from '../../../../../apps/browse-search/graphql/fragments';

export const PRODUCT_DETAIL_QUERY = gql`
  query ProductDetail($input: String!) {
    fetchProductBySku(skuId: $input) {
      sku
      title
      shortDescription
      description
      ...ProductImages
      ...UnitOfMeasure
      ...Brand
      ...Rating
      ...Price
      shipping {
        weight
        dimensions {
          width
          height
          depth
        }
      }
      categories
      productUrl
      baseProductId
      displayType
      productType
      maxQuantityAllowed
      isForSale
      marketingTags
      shippingTags
    }
  }
  ${PRODUCT_IMAGES}
  ${UNIT_OF_MEASURE}
  ${RATING}
  ${BRAND}
  ${PRICE}
`;
