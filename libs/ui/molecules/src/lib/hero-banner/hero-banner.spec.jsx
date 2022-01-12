import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '@jade/ui/themes';
import { HeroBanner } from './hero-banner';

describe('<HeroBanner />', () => {
  let HeroBannerComponent;
  beforeEach(() => {
    HeroBannerComponent = render(
      <ThemeProvider>
        <HeroBanner />
      </ThemeProvider>,
    );
  });

  /**
   * Capturing Sanpshot : Hero Banner
   *
   *  To check style / structure changes in Styled Components
   */
  test('snapshot check', () => {
    const { asFragment } = HeroBannerComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
