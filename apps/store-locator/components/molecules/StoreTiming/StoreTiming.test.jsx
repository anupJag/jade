import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import { StoreTiming } from './index';

describe('StoreTiming', () => {
  let StoreTimingComponent = '';
  let timing = {};
  let info = '';

  beforeEach(() => {
    timing = {
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

    info = 'Opening hours vary for some facilities.';

    StoreTimingComponent = render(
      <ThemeProvider>
        <StoreTiming timing={timing} info={info} />
      </ThemeProvider>,
    );
  });

  it('should render store timing correctly', async () => {
    const { asFragment } = StoreTimingComponent;
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have info text', () => {
    expect(screen.getByText(info).textContent).toEqual('Opening hours vary for some facilities.');
  });
});
