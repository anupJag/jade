import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { PLPContext } from '../../../../stores/plp/Context';

import mockResponse from '../../../../../public/mock/PLP.json';

import ProductList from '../index';

describe('ProductList', () => {
  let ProductListComponent = '';
  const dispatch = jest.fn();

  beforeEach(() => {
    const products = mockResponse.products;
    const mockState = {
      products,
      filteredProducts: products,
    };
    ProductListComponent = render(
      <ThemeProvider>
        <PLPContext.Provider value={{ state: mockState, dispatch }}>
          <ProductList />
        </PLPContext.Provider>
      </ThemeProvider>,
    );
  });

  it('should render products correctly', () => {
    const { asFragment } = ProductListComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
