import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { ClearFilterComponent } from './clear-filter';


describe('PLP Filters', () => {
  let FilterComponent = '';

  beforeEach(() => {
    FilterComponent = render(
      <ThemeProvider>
        <ClearFilterComponent />
      </ThemeProvider>,
    );
  });

  it('should render clear filter component correctly', () => {
    const { baseElement } = FilterComponent;
    expect(baseElement).toBeTruthy();
  });
});
