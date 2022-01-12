import * as fastify from 'fastify';
import * as helmet from 'fastify-helmet';
import * as cors from 'fastify-cors';
import { ApolloServer } from 'apollo-server-fastify';
import { DocumentNode } from 'graphql';
import { buildFederatedSchema } from '@apollo/federation';
import { GraphQLResolverMap } from 'apollo-graphql';

import { getLogger } from './logger';
import ProductsAPI from './productsDatasource';

export const getApolloServer = (
  typeDefs: DocumentNode,
  resolvers: GraphQLResolverMap,
): ApolloServer =>
  new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
    playground: true,
    introspection: true,
    context: req => {
      return req;
    },
    dataSources: () => ({
      productFetch: new ProductsAPI(),
    }),
  });

export const getServerInstance = async (server: ApolloServer): Promise<fastify.FastifyInstance> => {
  const logger = getLogger();
  const app = fastify({ logger });
  app.register(helmet);
  app.register(cors);
  app.register(server.createHandler());

  return app;
};
