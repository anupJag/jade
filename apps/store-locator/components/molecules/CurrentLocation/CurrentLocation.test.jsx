import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import { CurrentLocation } from './index';

describe('CurrentLocation', () => {
  let CurrentLocationComponent = '';

  beforeEach(() => {
    CurrentLocationComponent = render(
      <ThemeProvider>
        <CurrentLocation />
      </ThemeProvider>,
    );
  });

  it('should render current location correctly', () => {
    const { asFragment } = CurrentLocationComponent;
    expect(asFragment()).toMatchSnapshot();
  });

  // it('should render successfully', () => {
  //   const { baseElement } = render(<CurrentLocation />);
  //   expect(baseElement).toBeTruthy();
  // });
});
