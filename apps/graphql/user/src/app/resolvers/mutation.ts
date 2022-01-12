import { ApolloError, UserInputError } from 'apollo-server-fastify';
import { ERRORS } from '@jade/graphql/base';
import { IObject } from '../types';
import {
  registerUser as registerUserApi,
  login as loginApi,
  logout as logoutApi,
  ssoLogin as ssoLoginApi,
} from '../api';
import { validateEmail, validatePhone, validatePassword } from '@jade/utils';

export default {
  registerUser: async (parent: unknown, { details }: IObject) => {
    if (!validateEmail(details.email)) {
      throw new UserInputError(ERRORS.INVALID_EMAIL);
    }
    if (details.phoneNumber && !validatePhone(details.phoneNumber)) {
      throw new UserInputError(ERRORS.INVALID_PHONE_NUMBER);
    }
    if (details.validatePassword && !validatePassword(details.password)) {
      throw new UserInputError(ERRORS.INVALID_PASSWORD);
    }
    return await registerUserApi(details).catch(exception => {
      if (exception === ERRORS.EMAIL_ALREADY_REGISTERED) {
        throw new UserInputError(ERRORS.EMAIL_ALREADY_REGISTERED);
      }
      throw new ApolloError(ERRORS.GENERIC_SERVER_ERROR);
    });
  },
  login: async (parent: unknown, { loginDetail }: IObject) => {
    return await loginApi(loginDetail).catch(exception => {
      if (exception === ERRORS.USER_NOT_FOUND || exception === ERRORS.INCORRECT_PASSWORD)
        throw new UserInputError(ERRORS.INCORRECT_CREDENTIAL);
      throw new ApolloError(ERRORS.GENERIC_SERVER_ERROR);
    });
  },
  ssoLogin: async (parent: unknown, { ssoDetail }: IObject) => {
    return await ssoLoginApi(ssoDetail).catch(() => {
      throw new ApolloError(ERRORS.GENERIC_SERVER_ERROR);
    });
  },
  logout: async (parent: unknown, data, context) => {
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
      return await logoutApi(authtoken).catch(() => {
        throw new ApolloError(ERRORS.GENERIC_SERVER_ERROR);
      });
    }
    throw new UserInputError('Please provide auth token in header');
  },
};
