import React from 'react';
import { render } from '@testing-library/react';

import { ProductList } from './product-list';
import { defaultTheme, ThemeProvider } from '@jade/ui/themes';

describe('ProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={defaultTheme}>
        <ProductList />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
