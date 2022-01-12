import gql from 'graphql-tag';

export const MUTATE_REGISTER_USER = gql`
  mutation UserRegistration($details: UserRegistration!) {
    registerUser(details: $details) {
      id
      firstName
      lastName
      provider
      facebookId
      googleId
      email
      phoneNumber
      role
      profilePicture
    }
  }
`;

export const MUTATE_USER_LOGOUT = gql`
  mutation logout($id: ID) {
    logout(id: $id) {
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

interface RegisterUser {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber: string;
  password: string;
}

export const userVarsFn = (userDetails: RegisterUser) => {
  const { email, firstName, lastName, password, phoneNumber } = userDetails;
  return {
    details: {
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
    },
  };
};
