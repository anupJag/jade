import React from 'react';
import { render } from '@testing-library/react';
import Promotions from './promotions';

describe('ApplyCoupon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Promotions />);
    expect(baseElement).toBeTruthy();
  });
});
