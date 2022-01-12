import fetch from 'node-fetch';
import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  NormalizedCacheObject,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { useHttpLink } from './links';
// import { graphQLApiUri } from './endpoints';
import introspectionQueryResultData from './fragmentTypesSchema.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = new ApolloClient({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  link: useHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
    fetch: fetch,
  }),
  cache: new InMemoryCache({
    fragmentMatcher,
  }),
});

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient;

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
