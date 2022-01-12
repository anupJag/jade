import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import mockProducts from './product.mock';

import { ProductCarousel } from './product-carousel';

describe('<ProductCarouselTile />', () => {
  let ProductCarouselComponent = null;
  beforeEach(() => {
    ProductCarouselComponent = render(
      <ThemeProvider>
        <ProductCarousel products={mockProducts} heading="test heading" />
      </ThemeProvider>,
    );
  });

  test('should render correctly', () => {
    const { asFragment } = ProductCarouselComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
