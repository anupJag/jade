import { AuthenticationError } from 'apollo-server-fastify';
import { ERRORS } from '@jade/graphql/base';

import { IObject } from '../types';
import { verifyToken, tokenTypes } from '../service/token.service';

import { getUserById, getUserByEmail } from '../api';

export default {
  user: async (parent: any, { id }: IObject, context) => {
    if (
      context &&
      context.request &&
      context.request.headers &&
      context.request.headers.authtoken
    ) {
      const {
        request: {
          headers: { authtoken },
        },
      } = context;
      const refreshTokenDoc = await verifyToken(authtoken, tokenTypes.REFRESH);
      if (!refreshTokenDoc || refreshTokenDoc.expires < new Date().toISOString())
        throw new AuthenticationError(ERRORS.UNAUTHORIZE);
      return await getUserById(id);
    } else {
      throw new AuthenticationError(ERRORS.UNAUTHORIZE);
    }
  },
  userByEmail: async (parent: any, { email }: IObject) => await getUserByEmail(email),
  verifyToken: async (parent: any, _object: any, context: { request: any }) => {
    if (
      context &&
      context.request &&
      context.request.headers &&
      context.request.headers.authtoken
    ) {
      const {
        request: {
          headers: { authtoken },
        },
      } = context;
      const refreshTokenDoc = await verifyToken(authtoken, tokenTypes.REFRESH);
      if (!refreshTokenDoc || refreshTokenDoc.expires < new Date().toISOString())
        throw new AuthenticationError(ERRORS.UNAUTHORIZE);
      return await getUserById(refreshTokenDoc.user);
    } else {
      throw new AuthenticationError(ERRORS.UNAUTHORIZE);
    }
  },
};
