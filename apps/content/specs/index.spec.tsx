import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  const { pageInfo, userInfo, products, labels } = {
    pageInfo: {},
    userInfo: {},
    products: [],
    labels: { bestSellerLabel: 'Best Seller', featuredProductLabel: 'Featured Product' },
  };
  it('should render successfully', () => {
    const { baseElement } = render(
      <Index pageInfo={pageInfo} userInfo={userInfo} products={products} labels={labels} />,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <Index pageInfo={pageInfo} userInfo={userInfo} products={products} labels={labels} />,
    );
    expect(getByText('Welcome to content!')).toBeTruthy();
  });
});
