import gql from 'graphql-tag';

export const QUERY_APP_SEARCH = gql`
  query appSearch($searchText: String!) {
    suggestions: searchProducts(searchText: $searchText) {
      id
      title
      images {
        url
        altText
        isDefault
      }
      productUrl
    }
  }
`;

export interface AppSearch {
  searchText: string;
}

export const defineAppSearchVarFn = ({ searchText }: AppSearch) => ({
  searchText,
});
