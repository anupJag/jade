import React, { FC, useContext, useEffect, useState } from 'react';
import { Context as GlobalContext, updateAppUser } from '@jade/store';
import { HyperLink, List, ListItem, Avatar } from '@jade/ui/atoms';
import { getCookie, deleteCookie } from '@jade/utils';
import {
  initializeAuthorisedApollo,
  QUERY_USER_BY_ID,
  MUTATE_USER_LOGOUT,
} from '@jade/graphql-client';
import { useGoogleLogout } from 'react-google-login';
import { useRouter } from 'next/router';

import * as S from './AuthNavigation.styled';

declare global {
  interface Window {
    FB: any;
  }
}

export const AuthNavigation: FC = props => {
  const [userInfo, setUserInfo] = useState({
    provider: null,
    firstName: null,
    profilePicture: null,
    id: null,
  });
  const router = useRouter();
  const [shouldDisplay, setDisplay] = useState(false);
  const [userId, setUserId] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (userId && refreshToken) {
      const apolloClient = initializeAuthorisedApollo(refreshToken);
      apolloClient
        .query({
          query: QUERY_USER_BY_ID,
          variables: { id: userId },
        })
        .then(response => {
          const userInf = response.data.user;
          if (!userInf) throw new Error();
          setUserInfo(userInf);
          setDisplay(true);
          updateAppUser({ user: userInf }, dispatch);
        })
        .catch(err => {
          deleteCookie('userId');
          deleteCookie('provider');
          deleteCookie('access');
          deleteCookie('refresh');
          setUserInfo({ provider: null, firstName: null, profilePicture: null, id: null });
          updateAppUser(
            {
              user: null,
            },
            dispatch,
          );
          setDisplay(true);
        });
    }
  }, [dispatch, refreshToken, userId]);

  useEffect(() => {
    const cookie = document.cookie;
    const userId = getCookie(cookie, 'userId');
    const token = getCookie(cookie, 'refresh');
    if (token && userId) {
      const refreshToken = JSON.parse(token).token;
      setUserId(userId);
      setRefreshToken(refreshToken);
    } else if (router?.pathname === '/signin' || router?.pathname === '/register') {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [userId, refreshToken, router?.pathname]);

  const { signOut: signOutGoogle } = useGoogleLogout({
    onFailure: () => console.error('error'),
    clientId: '421506275526-dsg80ohb5tdb0e0im9pikbk0vfr2iigb.apps.googleusercontent.com',
    onLogoutSuccess: () => {
      console.log('logut');
    },
  });

  const signOut = () => {
    if (userInfo && userInfo.provider === 'google') {
      signOutGoogle();
    } else if (userInfo && userInfo.provider === 'facebook') {
      window.FB.logout();
    } else {
      if (userId && refreshToken) {
        const apolloClient = initializeAuthorisedApollo(refreshToken);
        apolloClient.mutate({
          mutation: MUTATE_USER_LOGOUT,
          variables: { id: userId },
        });
      }
    }
    deleteCookie('userId');
    deleteCookie('provider');
    deleteCookie('access');
    deleteCookie('refresh');
    setUserInfo({ provider: null, firstName: null, profilePicture: null, id: null });
    updateAppUser(
      {
        user: null,
      },
      dispatch,
    );
    setDisplay(true);
  };

  const renderSignin = () => {
    return (
      <>
        <S.CompWrapper>
          <HyperLink href="/signin" type="PrimaryNav" title="Signin" hasSubnav={false}>
            Signin
          </HyperLink>
        </S.CompWrapper>
        <S.CompWrapper>/</S.CompWrapper>
        <S.CompWrapper>
          <HyperLink href="/register" type="PrimaryNav" title="Register" hasSubnav={false}>
            Register
          </HyperLink>
        </S.CompWrapper>
      </>
    );
  };

  const renderUserInfo = () => {
    return (
      <>
        <S.CompWrapper>
          <List spacing={3}>
            <ListItem>
              <Avatar
                size="md"
                showBorder
                name={userInfo.firstName}
                src={userInfo.profilePicture}
              />
              <S.Margin>{userInfo.firstName}</S.Margin>
            </ListItem>
          </List>
        </S.CompWrapper>
        <S.CompWrapper>
          <S.Margin>
            <HyperLink
              href="#"
              onClick={signOut}
              type="PrimaryNav"
              title="Signin"
              hasSubnav={false}>
              Logout
            </HyperLink>
          </S.Margin>
        </S.CompWrapper>
      </>
    );
  };

  if (!shouldDisplay) return <div />;

  return (
    <S.CompWrapper>
      <S.Nav>
        <S.NavList>
          {!(router?.pathname === '/signin' || router?.pathname === '/register') &&
          userInfo &&
          userInfo.id
            ? renderUserInfo()
            : renderSignin()}
        </S.NavList>
      </S.Nav>
    </S.CompWrapper>
  );
};

export default AuthNavigation;
