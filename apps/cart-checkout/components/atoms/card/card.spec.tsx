import React from 'react';
import { ThemeProvider } from '@jade/ui/themes';
import { render } from '@testing-library/react';
import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <Card />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
