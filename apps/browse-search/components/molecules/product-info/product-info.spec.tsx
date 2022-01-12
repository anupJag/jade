import React from 'react';
import { render } from '@testing-library/react';

import ProductInfo from './product-info';

describe('ProductInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductInfo />);
    expect(baseElement).toBeTruthy();
  });
});
