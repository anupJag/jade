import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '@jade/ui/themes';
// TODO : Due to SVG resolving issue in Jest, Its commented
// TODO : It should be enabled once svg support added for JEST
//import { Logo } from './logo';

describe('<Logo />', () => {
  let LogoComponent;
  beforeEach(() => {
    LogoComponent = render(
      <ThemeProvider>
        {/* TODO :  It should be enabled once svg support added for JEST */}
        {/* <Logo /> */}
      </ThemeProvider>,
    );
  });

  /**
   * Capturing Sanpshot : Logo
   *
   *  To check style / structure changes in Styled Components
   */
  test('snapshot check', () => {
    const { asFragment } = LogoComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
