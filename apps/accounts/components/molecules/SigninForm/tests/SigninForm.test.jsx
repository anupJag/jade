import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { ApolloProvider } from '@apollo/react-hooks';
import { initializeApollo } from '@jade/graphql-client';
import { act } from 'react-dom/test-utils';

import SigninForm from '../index';

describe('SigninForm', () => {
  let SigninFormComponent = '';
  const initApolloClient = initializeApollo();
  beforeEach(() => {
    SigninFormComponent = render(
      <ApolloProvider client={initApolloClient}>
        <ThemeProvider>
          <SigninForm />
        </ThemeProvider>
      </ApolloProvider>,
    );
  });

  it('should render signin form correctly', () => {
    const { baseElement } = SigninFormComponent;
    expect(baseElement).toBeTruthy();
  });

  xit('renders the password validation error', async () => {
    const { getByPlaceholderText, container } = SigninFormComponent;

    await act(async () => {
      const paswordInput = getByPlaceholderText('*******');
      fireEvent.change(paswordInput, { target: { value: '123' } });
      await act(async () => {
        fireEvent.click(container.querySelector('[type="submit"]'));
      });
      expect(container.querySelector('#password').getAttribute('aria-invalid')).toBeTruthy();
    });
  });

  xit('renders the email validation error', async () => {
    const { getByPlaceholderText, container } = SigninFormComponent;

    await act(async () => {
      const emailInput = getByPlaceholderText('e.g. name@example.com');
      fireEvent.change(emailInput, { target: { value: '123' } });
      await act(async () => {
        fireEvent.click(container.querySelector('[type="submit"]'));
      });
      expect(container.querySelector('#email').getAttribute('aria-invalid')).toBeTruthy();
    });
  });
});
