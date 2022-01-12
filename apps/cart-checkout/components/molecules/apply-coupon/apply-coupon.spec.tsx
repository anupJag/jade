import React from 'react';
import { render } from '@testing-library/react';
import ApplyCoupon from './apply-coupon';

describe('ApplyCoupon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApplyCoupon />);
    expect(baseElement).toBeTruthy();
  });
});
