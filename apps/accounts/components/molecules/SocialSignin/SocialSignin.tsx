/* eslint-disable react/jsx-no-undef */
import React from 'react';
import getConfig from 'next/config';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { Button, Box, Grid } from '@jade/ui/atoms';

// import { setSocialSigninData } from '../../utils';
import { LabelContext } from '../../../stores/labelContext';

export default function SocialSignin(props) {
  const { responseFacebook, responseGoogle } = props;

  const { publicRuntimeConfig } = getConfig();
  const { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } = publicRuntimeConfig;

  const rejectGoogle = error => console.log(error);

  return (
    <LabelContext.Consumer>
      {value => (
        <Box borderTop="1px" borderColor="gray.300" mt={8} pt={4} justifyContent="center">
          <p>{value?.connectSocialMedia}</p>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {value?.signinFacebook && (
              <FacebookLogin
                appId={FACEBOOK_APP_ID}
                fields="name,email,picture"
                callback={responseFacebook}
                size="small"
                textButton="facebook"
                render={renderProps => (
                  <Button
                    mt={4}
                    variantColor="blue"
                    variant="solid"
                    width="100%"
                    onClick={renderProps.onClick}>
                    {value?.signinFacebook}
                  </Button>
                )}
                onFailure={(error: unknown) => console.log(error)}
              />
            )}
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={rejectGoogle}
              render={renderProps => (
                <Button
                  mt={4}
                  variantColor="yellow"
                  variant="solid"
                  width="100%"
                  onClick={renderProps.onClick}>
                  {value?.signinGoogle}
                </Button>
              )}
              cookiePolicy="single_host_origin"
            />
          </Grid>
        </Box>
      )}
    </LabelContext.Consumer>
  );
}
