import { FastifyInstance } from 'fastify';
import { getLogger } from './logger';

export const startServer = async (serverInstance: FastifyInstance, host: string, port: number) => {
  const logger = getLogger();
  try {
    const address = await serverInstance.listen(port, host);
    logger.info(`Server successfully started on address: ${address}`);
    return serverInstance;
  } catch (err) {
    logger.error(`Error starting server: ${err}`);
  }
};
