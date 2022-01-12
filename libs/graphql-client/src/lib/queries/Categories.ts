import gql from 'graphql-tag';

export const QUERY_CATEGORY_LIST = gql`
  query {
    fetchCategories {
      id
      name
      isRootCategory
      parentId
    }
  }
`;
