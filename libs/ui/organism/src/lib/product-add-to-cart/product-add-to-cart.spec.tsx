import React from 'react';
import { render } from '@testing-library/react';

import ProductAddToCart from './product-add-to-cart';
import { defaultTheme, ThemeProvider } from '@jade/ui/themes';

describe(' ProductAddToCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={defaultTheme}>
        <ProductAddToCart />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
