import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import { StoreOpenStatus } from './index';

describe('StoreOpenStatus', () => {
  let StoreOpenStatusComponent = '';

  beforeEach(() => {
    const storeTiming = {
      mon: {
        openingTime: '07:00',
        closingTime: '23:00',
      },
      tue: {
        openingTime: '07:00',
        closingTime: '23:00',
      },
      wed: {
        openingTime: '07:00',
        closingTime: '23:00',
      },
      thu: {
        openingTime: '07:00',
        closingTime: '23:00',
      },
      fri: {
        openingTime: '07:00',
        closingTime: '23:00',
      },
      sat: {
        openingTime: '07:00',
        closingTime: '23:00',
      },
      sun: {
        openingTime: '07:00',
        closingTime: '23:00',
      },
    };
    const offset = Number('+10');

    StoreOpenStatusComponent = render(
      <ThemeProvider>
        <StoreOpenStatus storeTiming={storeTiming} offset={offset} />
      </ThemeProvider>,
    );
  });

  it('should render store open status correctly', async () => {
    const { asFragment } = StoreOpenStatusComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
