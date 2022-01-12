import React from 'react';
import { render } from '@testing-library/react';

import ProductTags from './productTags';

describe('ProductTags', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductTags tags={['new']} />);
    expect(baseElement).toBeTruthy();
  });
});
