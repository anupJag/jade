import React from 'react';
import { render } from '@testing-library/react';

import { Product } from './product';
import { ProductDetails } from './product.type';
import { ThemeProvider } from '@jade/ui/themes';

describe('Product', () => {
  it('should render successfully', () => {
    const mockProduct: ProductDetails = {
      id: 1234,
      imageUrl: './sample/image',
      imageAlt: 'sample image',
      title: 'sample image',
      formattedPrice: '$20',
      priceUnit: '20',
      reviewCount: 10,
      rating: 4,
      onSale: true,
    };
    const { baseElement } = render(
      <ThemeProvider>
        <Product product={mockProduct} />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
