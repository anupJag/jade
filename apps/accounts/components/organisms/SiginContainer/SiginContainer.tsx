import React, { FC } from 'react';
import { Box } from '@jade/ui/atoms';
import { useRouter } from 'next/router';
import { initializeApollo, MUTATE_SSO_LOGIN } from '@jade/graphql-client';

import SigninForm from '../../molecules/SigninForm';
import SocialSignin from '../../molecules/SocialSignin';
import { setCookie } from '../../utils/user.auth';

const SiginContainer: FC = () => {
  const router = useRouter();
  const apolloClient = initializeApollo();

  const responseFacebook = async (fbResponse: any) => {
    apolloClient
      .mutate({
        mutation: MUTATE_SSO_LOGIN,
        variables: {
          ssoDetail: {
            firstName: fbResponse.name.split(' ')[0],
            email: fbResponse.email,
            facebookId: fbResponse.id,
            profilePicture: fbResponse.picture.data.url,
            provider: ['facebook'],
          },
        },
      })
      .then(response => {
        if (response.data.ssoLogin && response.data.ssoLogin.id) {
          setCookie('userId', response.data.ssoLogin.id);
          setCookie('provider', 'facebook');
          setCookie('access', JSON.stringify(response.data.ssoLogin.access));
          setCookie('refresh', JSON.stringify(response.data.ssoLogin.refresh));
          router.push('/');
        }
      });
  };

  const responseGoogle = gResponse => {
    apolloClient
      .mutate({
        mutation: MUTATE_SSO_LOGIN,
        variables: {
          ssoDetail: {
            firstName: gResponse.profileObj.givenName,
            lastName: gResponse.profileObj.familyName,
            email: gResponse.profileObj.email,
            googleId: gResponse.profileObj.googleId,
            profilePicture: gResponse.profileObj.imageUrl,
            provider: ['google'],
          },
        },
      })
      .then(response => {
        if (response.data.ssoLogin && response.data.ssoLogin.id) {
          setCookie('userId', response.data.ssoLogin.id);
          setCookie('provider', 'google');
          setCookie('access', JSON.stringify(response.data.ssoLogin.access));
          setCookie('refresh', JSON.stringify(response.data.ssoLogin.refresh));
          router.push('/');
        }
      });
  };

  return (
    <Box justifyContent="center" d="flex">
      <Box my={1} p={10} width={450} textAlign="left">
        <SigninForm />
        <SocialSignin responseFacebook={responseFacebook} responseGoogle={responseGoogle} />
      </Box>
    </Box>
  );
};

export default SiginContainer;
