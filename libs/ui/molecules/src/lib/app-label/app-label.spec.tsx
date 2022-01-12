import React from 'react';
import { render } from '@testing-library/react';

import { GlobalLabel } from './app-label';

describe('AppLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlobalLabel path="offerLabel" />);
    expect(baseElement).toBeTruthy();
  });
});
