import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, defaultTheme } from '@jade/ui/themes';
import { CSSReset } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { initializeApollo } from '@jade/graphql-client';
import Index from '../pages/cart/index';

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
  test('snapshot check', () => {
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
