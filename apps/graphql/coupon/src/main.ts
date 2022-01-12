import { join } from 'path';
import {
  connectDB,
  createLogger,
  getApolloServer,
  getServerInstance,
  getTypeDefs,
  startServer,
} from '@jade/graphql/base';
import resolvers from './app/resolvers';

// By default nx takes CWD as root of the monorepo, hence validating currentPath
const appPath = process.env['NODE' + '_ENV'] === 'development' ? 'apps/graphql/coupon/' : '/';
const currentPath = join(process.cwd(), appPath);

async function start() {
  createLogger(process.env.APP_NAME, process.env.LOG_LEVEL);
  await connectDB();
  const devDir = process.env['NODE' + '_ENV'] === 'development' ? 'src' : '';

  const types = await getTypeDefs(join(currentPath, devDir, 'assets/typeDefs/*.graphql'));

  startServer(
    await getServerInstance(getApolloServer(types, resolvers)),
    process.env.HOST,
    parseInt(process.env.PORT, 10),
  );
}

start();
