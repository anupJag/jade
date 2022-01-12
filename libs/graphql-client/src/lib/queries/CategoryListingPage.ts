import gql from 'graphql-tag';

export const QUERY_SUB_CATEGORY = gql`
  query GETCATEGORIES($id: ID!) {
    categories: fetchAllChildrenOfCategoryId(id: $id) {
      id
      name
      categoryIdentifier
      isRootCategory
      parentId
      image
    }
  }
`;
