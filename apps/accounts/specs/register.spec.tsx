import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { defaultTheme } from '@jade/ui/themes';
import { CSSReset } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { initializeApollo } from '@jade/graphql-client';
import RegisterComponent from '../pages/register';

describe(' Register', () => {
  it('should render successfully', () => {
    const pageInfo = {
      pageMetadata: {
        pageTitle: 'signin',
        pageDescription: 'singin page to log into the application',
        pageKeywords: 'signin, social-signin',
      },
      accountAppLabelsCollection: {},
    };
    const initApolloClient = initializeApollo();
    const { baseElement } = render(
      <ApolloProvider client={initApolloClient}>
        <ThemeProvider theme={defaultTheme}>
          <CSSReset />
          <RegisterComponent pageInfo={pageInfo} />
        </ThemeProvider>
      </ApolloProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
