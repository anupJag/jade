import React from 'react';
import getConfig from 'next/config';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  useApollo,
  initializeApollo,
  QUERY_GLOBAL_LABELS,
  globalLabelVars,
} from '@jade/graphql-client';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import { ThemeProvider } from '@jade/ui/themes';
import { CSSReset } from '@chakra-ui/core';
import { createInstance, OptimizelyProvider } from '@optimizely/react-sdk';
import { GlobalStyles } from '@jade/ui/themes';
import { defaultTheme } from '@jade/ui/themes';
import { GlobalContextProvider } from '@jade/store';
import { GlobalAppProps } from '@jade/store/types';
import { CartContextProvider } from '@jade/ui/organism';
import { formatLabelsCollection, formatConfigCollection } from '@jade/ui/utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { publicRuntimeConfig } = getConfig();
const { OPTIMIZELY_KEY } = publicRuntimeConfig;

const optimizely = createInstance({
  sdkKey: OPTIMIZELY_KEY,
});

function BrowseApp({ Component, pageProps, globalConfigs }: GlobalAppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const globalIntialData = {
    label: formatLabelsCollection(globalConfigs.label),
    config: formatConfigCollection(globalConfigs.config),
  };

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
            <GlobalContextProvider ssrAppState={{ ...globalIntialData }}>
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

BrowseApp.getInitialProps = async ({ Component, ctx }) => {
  const apolloClient = initializeApollo();

  let pageProps = {};

  /**
   * Query : Global Labels
   *
   * querying global labels like headers and footer
   *
   */
  const { data: globalConfigs } = await apolloClient.query({
    query: QUERY_GLOBAL_LABELS,
    variables: globalLabelVars,
  });

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    globalConfigs,
  };
};

export default BrowseApp;
