import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { defaultTheme } from '@jade/ui/themes';
import { CSSReset } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { initializeApollo } from '@jade/graphql-client';
import { ApolloClient } from '@apollo/client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import Index from '../pages/index';

describe(' Index', () => {
  it('should render successfully', () => {
    const initApolloClient = initializeApollo();
    const { baseElement } = render(
      <ApolloProvider client={initApolloClient}>
        <ThemeProvider theme={defaultTheme}>
          <CSSReset />
          <Index />
        </ThemeProvider>
      </ApolloProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
  xit('snapshot check', () => {
    const initApolloClient = initializeApollo();
    const { asFragment } = render(
      <ApolloProvider client={initApolloClient}>
        <ThemeProvider theme={defaultTheme}>
          <CSSReset />
          <Index />
        </ThemeProvider>
      </ApolloProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
