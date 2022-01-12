import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <Layout slug="review-basket" />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
