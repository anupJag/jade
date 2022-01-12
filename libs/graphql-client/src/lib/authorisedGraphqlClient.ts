import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { useHttpLink } from './links';
import introspectionQueryResultData from './fragmentTypesSchema.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

export const initializeAuthorisedApollo = (token = '') => {
  return new ApolloClient({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    link: useHttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
      fetch: fetch,
      headers: { authToken: token },
    }),
    cache: new InMemoryCache({
      fragmentMatcher,
    }),
  });
};
