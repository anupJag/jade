import gql from 'graphql-tag';

export const QUERY_USER_BY_EMAIL = gql`
  query userByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      firstName
      lastName
      email
      profilePicture
      provider
      phoneNumber
      googleId
      facebookId
      role
    }
  }
`;

export const QUERY_USER_BY_ID = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      profilePicture
      provider
      phoneNumber
      googleId
      facebookId
      role
    }
  }
`;

export const userByEmail = (email: string) => {
  return {
    email,
  };
};
