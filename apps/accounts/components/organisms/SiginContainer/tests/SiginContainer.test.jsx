import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { ApolloProvider } from '@apollo/react-hooks';
import { initializeApollo } from '@jade/graphql-client';

import SiginContainer from '../index';

describe('SigninContainer', () => {
  let SiginContainerComponent = '';
  const initApolloClient = initializeApollo();
  beforeEach(() => {
    SiginContainerComponent = render(
      <ApolloProvider client={initApolloClient}>
        <ThemeProvider>
          <SiginContainer />
        </ThemeProvider>
      </ApolloProvider>,
    );
  });

  it('should render signin container correctly', () => {
    const { baseElement } = SiginContainerComponent;
    expect(baseElement).toBeTruthy();
  });
});
