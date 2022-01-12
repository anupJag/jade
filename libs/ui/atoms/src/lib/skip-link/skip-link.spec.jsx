import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '@jade/ui/themes';
import { SkipLink } from './skip-link';

describe('<SkipLink />', () => {
  let skipLinkComponent;
  beforeEach(() => {
    skipLinkComponent = render(
      <ThemeProvider>
        <SkipLink />
      </ThemeProvider>,
    );
  });

  /**
   * Capturing Sanpshot : Skip Link
   *
   *  To check style / structure changes in Styled Components
   */
  test('snapshot check', () => {
    const { asFragment } = skipLinkComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
