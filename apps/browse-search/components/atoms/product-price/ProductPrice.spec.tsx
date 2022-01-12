import React from 'react';
import { render } from '@testing-library/react';

import ProductPrice from './ProductPrice';

describe('ProductPrice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductPrice />);
    expect(baseElement).toBeTruthy();
  });
});
