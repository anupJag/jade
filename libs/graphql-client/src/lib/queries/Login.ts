import gql from 'graphql-tag';

export const MUTATE_LOGIN = gql`
  mutation LoginDetail($loginDetail: LoginDetail!) {
    login(loginDetail: $loginDetail) {
      id
      firstName
      lastName
      email
      profilePicture
      phoneNumber
      googleId
      facebookId
      role
      provider
      access {
        token
        expires
      }
      refresh {
        token
        expires
      }
    }
  }
`;

export const MUTATE_SSO_LOGIN = gql`
  mutation SSOLogin($ssoDetail: SSODetail!) {
    ssoLogin(ssoDetail: $ssoDetail) {
      id
      firstName
      lastName
      email
      profilePicture
      phoneNumber
      googleId
      facebookId
      role
      provider
      access {
        token
        expires
      }
      refresh {
        token
        expires
      }
    }
  }
`;

interface LoginDetail {
  email: string;
  password: string;
}

interface SSODetail {
  firstName: string;
  lastName?: string;
  email: string;
  profilePicture?: string;
  phoneNumber?: string;
  googleId?: string;
  facebookId?: string;
  role?: string;
  provider?: [string];
}

export const loginVars = (loginDetail: LoginDetail) => {
  return {
    loginDetail: {
      ...loginDetail,
    },
  };
};
