import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import { StoreImage } from './index';

describe('StoreImage', () => {
  let StoreImageComponent = '';

  beforeEach(() => {
    StoreImageComponent = render(
      <ThemeProvider>
        <StoreImage />
      </ThemeProvider>,
    );
  });

  it('should render store basic details correctly', async () => {
    const { asFragment } = StoreImageComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
