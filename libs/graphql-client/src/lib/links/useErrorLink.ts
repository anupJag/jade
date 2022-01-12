import { onError } from 'apollo-link-error';
// TODO : Replace logger with actual logger & fix type errors
const Logger = console;

export const useErrorLink = () =>
  onError(({ graphQLErrors, networkError, operation: { operationName } }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        Logger.error(`[GraphQL Error in ${operationName}]: ${message}, ${locations}, ${path}`),
      );
    }
    if (networkError) {
      Logger.error(`[GraphQL Network Error in ${operationName}]: ${networkError}`);
    }
  });
