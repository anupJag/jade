import { config } from 'dotenv';

import { createLogger, getServerInstance, startServer } from '@jade/graphql/base';
import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server-fastify';

config();

async function start() {
  createLogger(process.env.APP_NAME, process.env.LOG_LEVEL);

  const serviceList = JSON.parse(process.env.SERVICE_LIST);

  console.log('SERVICE LIST: ', serviceList);

  class AuthenticatedDataSource extends RemoteGraphQLDataSource {
    willSendRequest({ request, context }) {
      if (context.token) request.http.headers.set('authToken', context.token);
      return request;
    }
  }

  const gateway = new ApolloGateway({
    serviceList,
    __exposeQueryPlanExperimental: true,
    buildService({ url }) {
      return new AuthenticatedDataSource({ url });
    },
  });

  startServer(
    await getServerInstance(
      new ApolloServer({
        gateway,
        subscriptions: false,
        playground: true,
        introspection: true,
        context: ({ request }) => {
          const token = request.headers.authtoken || '';
          return { token };
        },
      }),
    ),
    process.env.HOST,
    parseInt(process.env.PORT, 10),
  );
}

start();
