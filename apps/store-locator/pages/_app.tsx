import React from 'react';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '@jade/graphql-client';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import { ThemeProvider } from '@jade/ui/themes';
import { CSSReset } from '@chakra-ui/core';
import { createInstance, OptimizelyProvider } from '@optimizely/react-sdk';
import { GlobalStyles } from '@jade/ui/themes';
import { defaultTheme } from '@jade/ui/themes';
import { GlobalContextProvider } from '@jade/store';
import { CartContextProvider } from '@jade/ui/organism';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { publicRuntimeConfig } = getConfig();
const { OPTIMIZELY_KEY } = publicRuntimeConfig;

const optimizely = createInstance({
  sdkKey: OPTIMIZELY_KEY,
});

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <OptimizelyProvider
        optimizely={optimizely}
        user={{
          id:
            (typeof window !== 'undefined' && window.sessionStorage.getItem('userId')) || 'user123',
        }}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={defaultTheme}>
            <CSSReset />
            <GlobalStyles />
            <GlobalContextProvider>
              <CartContextProvider>
                <Component {...pageProps} />
              </CartContextProvider>
            </GlobalContextProvider>
          </ThemeProvider>
        </CacheProvider>
      </OptimizelyProvider>
    </ApolloProvider>
  );
}

export default MyApp;
