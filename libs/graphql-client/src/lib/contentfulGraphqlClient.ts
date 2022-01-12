import fetch from 'node-fetch';
import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { useHttpLink } from './links';

const cmsPath = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

let apolloClientContentful: ApolloClient<NormalizedCacheObject>;

/**
 * Apollo Client for Contentful
 */
const createContentfulApolloClient = new ApolloClient({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  link: useHttpLink({
    uri: cmsPath,
    fetch: fetch,
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}` },
  }),
  cache: new InMemoryCache(),
});

export function initializeContentfulApollo(initialState: any = null) {
  const _apolloClient = apolloClientContentful ?? createContentfulApolloClient;

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClientContentful) apolloClientContentful = _apolloClient;

  return _apolloClient;
}

export function useContentfulApollo(initialState: any = null) {
  return useMemo(() => initializeContentfulApollo(initialState), [initialState]);
}
