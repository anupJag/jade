import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import { StoreBasicDetails } from './index';

describe('StoreBasicDetails', () => {
  let StoreBasicDetailsComponent = '';

  beforeEach(() => {
    const basicDetails = [
      {
        icon: 'info',
        value: '',
      },
      {
        icon: 'phone',
        value: '',
      },
    ];

    StoreBasicDetailsComponent = render(
      <ThemeProvider>
        <StoreBasicDetails basicDetails={basicDetails} />
      </ThemeProvider>,
    );
  });

  it('should render store basic details correctly', async () => {
    const { asFragment } = StoreBasicDetailsComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
