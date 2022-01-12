import React from 'react';
import { render } from '@testing-library/react';

import { Cart } from './cart';
import { ApolloProvider } from '@apollo/react-hooks';
import { initializeApollo } from '@jade/graphql-client';
import { defaultTheme, ThemeProvider } from '@jade/ui/themes';
describe('Cart', () => {
  it('should render successfully', () => {
    const initApolloClient = initializeApollo();
    const { baseElement } = render(
      <ApolloProvider client={initApolloClient}>
        <ThemeProvider theme={defaultTheme}>
          <Cart onClose={jest.fn} isOpen />
        </ThemeProvider>
      </ApolloProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
