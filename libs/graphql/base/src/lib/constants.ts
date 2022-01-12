/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IObject {
  [key: string]: any;
}

export const SCHEMA_NAME: IObject = {
  TEST: 'Test',
  CATEGORIES: 'Categories',
  CATEGORIES_CHILDREN: 'CategoriesChildren',
  CATEGORIES_SUB_CHILDREN: 'CategoriesSubChildren',
  USER: 'User',
  PRODUCT: 'Product',
  CART: 'Cart',
  FILTER: 'Filter',
  SLOT: 'Slot',
  STORE: 'Store',
  PROMOTION: 'Promotion',
};

export const ERRORS: IObject = {
  NO_DOT_ENV_FILE: 'Not able to find a .env file in the root project directory',
  DB_CONN_ERROR: 'Error connecting to the mongodb instance',
  EMAIL_ALREADY_REGISTERED: 'Email address is already registered',
  GENERIC_SERVER_ERROR: 'Server has failed to handle the request',
  INVALID_EMAIL: 'Invalid email address.',
  INVALID_PHONE_NUMBER: 'Invalid phone number.',
  INVALID_PASSWORD: 'Invalid Password',
  USER_NOT_FOUND: "Email id doesn't exist",
  INCORRECT_PASSWORD: 'Incorrect password',
  INCORRECT_CREDENTIAL: 'Incorrect Email/Password.',
  UNAUTHORIZE: 'User must be authenticated.',
};

export const PER_PAGE_LIMIT: Number = 10;