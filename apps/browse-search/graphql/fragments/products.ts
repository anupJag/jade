import gql from 'graphql-tag';

export const PRODUCT_IMAGES = gql`
  fragment ProductImages on Product {
    images {
      url
      altText
      isDefault
    }
  }
`;

export const UNIT_OF_MEASURE = gql`
  fragment UnitOfMeasure on Product {
    unitOfMeasure {
      unitType
      minQty
      displayText
    }
  }
`;

export const BRAND = gql`
  fragment Brand on Product {
    brand {
      name
      brandType
    }
  }
`;

export const RATING = gql`
  fragment Rating on Product {
    rating {
      value
      count
    }
  }
`;

export const PRICE = gql`
  fragment Price on Product {
    pricing {
      list
      retail
    }
  }
`;

export const LIST_PAGINATION = gql`
  fragment ListPagination on ProductListType {
    pagination {
      totalDocs
      limit
      page
      totalPages
      pagingCounter
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
    }
  }
`;
