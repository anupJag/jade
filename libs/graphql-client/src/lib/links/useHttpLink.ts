import { createHttpLink } from 'apollo-link-http';

export const useHttpLink = ({ uri, fetch, headers = {} }) =>
  createHttpLink({
    uri: uri,
    fetch: fetch,
    headers,
  });
