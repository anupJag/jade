import React from 'react';
import { render } from '@testing-library/react';

import CheckoutStepper from './checkout-stepper';
import { ThemeProvider } from '@jade/ui/themes';

describe('CheckoutStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <CheckoutStepper slug="review-basket" />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
