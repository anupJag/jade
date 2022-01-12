import React from 'react';
import { ThemeProvider } from '@jade/ui/themes';
import { render } from '@testing-library/react';
import CardRow from './card-row';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <CardRow />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
