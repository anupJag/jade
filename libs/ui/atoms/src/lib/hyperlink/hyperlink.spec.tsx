import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '@jade/ui/themes';
import { HyperLink } from './hyperlink';

describe('<Link />', () => {
  let LinkComponent;
  beforeEach(() => {
    LinkComponent = render(
      <ThemeProvider>
        {/* With default values */}
        <HyperLink />
        {/* To check conditional change in component */}
        <HyperLink type="SecondaryNav" hasSubnav />
      </ThemeProvider>,
    );
  });

  /**
   * Capturing Sanpshot : Link
   *
   *  To check style / structure changes in Styled Components
   */
  test('snapshot check', () => {
    const { asFragment } = LinkComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
