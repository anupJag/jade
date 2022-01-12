import gql from 'graphql-tag';
import {
  PRODUCT_IMAGES,
  UNIT_OF_MEASURE,
  RATING,
  BRAND,
  LIST_PAGINATION,
  PRICE,
} from '../fragments';

export const QUERY_SEARCH_RESULT = gql`
  query ProductListPage(
    $searchText: String
    $page: Int
    $sortStyle: Int
    $sortType: String
    $priceRange: String
    $rating: String
    $brands: String
    $deliveryType: String
    $discount: String
    $reviewCount: String
  ) {
    getFacets(
      details: {
        listCategory: ""
        searchText: $searchText
        page: $page
        sortStyle: $sortStyle
        sortType: $sortType
        priceRange: $priceRange
        rating: $rating
        brands: $brands
        deliveryType: $deliveryType
        discount: $discount
        reviewCount: $reviewCount
      }
    ) {
      filters {
        ... on RangeFilter {
          displayName
          key
          type
          range {
            start
            end
          }
        }
        ... on ValueFilter {
          displayName
          key
          type
          range {
            label
            value
          }
        }
      }
      products {
        sku
        title
        shortDescription
        ...ProductImages
        ...UnitOfMeasure
        ...Brand
        ...Rating
        ...Price
        categories
        productUrl
        productType
        maxQuantityAllowed
        isForSale
        marketingTags
      }
      ...ListPagination
    }
  }
  ${PRODUCT_IMAGES}
  ${UNIT_OF_MEASURE}
  ${RATING}
  ${BRAND}
  ${PRICE}
  ${LIST_PAGINATION}
`;

export interface SearchPage {
  searchText: string;
  page: number;
  sortStyle: number;
  sortType: string;
  priceRange: string;
  rating: string;
  brands: string;
  deliveryType: string;
  discount: string;
  reviewCount: string;
}

export const searchPageVars = ({
  searchText,
  page,
  sortStyle,
  sortType,
  priceRange,
  rating,
  brands,
  deliveryType,
  discount,
  reviewCount,
}: SearchPage) => ({
  searchText,
  page,
  sortStyle,
  sortType,
  priceRange,
  rating,
  brands,
  deliveryType,
  discount,
  reviewCount,
});
