import React from 'react';
import { render } from '@testing-library/react';

import ProductSpecification from './product-specification';

describe('ProductSpecification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductSpecification />);
    expect(baseElement).toBeTruthy();
  });
});
