import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import SocialSignin from '../index';

describe('SocialSignin', () => {
  let SocialSigninComponent = '';

  beforeEach(() => {
    SocialSigninComponent = render(
      <ThemeProvider>
        <SocialSignin />
      </ThemeProvider>,
    );
  });

  it('should render signin form correctly', () => {
    const { asFragment } = SocialSigninComponent;
    //expect(asFragment()).toMatchSnapshot();
  });
});
