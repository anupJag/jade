import React from 'react';
import { render } from '@testing-library/react';

import { CartDrawer } from './cart-drawer';

describe(' CartDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
