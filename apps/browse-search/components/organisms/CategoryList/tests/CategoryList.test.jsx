import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { CLPContext } from '../../../../stores/clp/Context';

import mockResponse from '../../../../public/mock/CLP.json';

import CategoryList from '../index';

describe('CategoryList', () => {
  let CategoryListComponent = '';
  const dispatch = jest.fn();

  beforeEach(() => {
    const categories = mockResponse.categories;
    const mockState = {
      categories,
    };
    CategoryListComponent = render(
      <ThemeProvider>
        <CLPContext.Provider value={{ state: mockState, dispatch }}>
          <CategoryList />
        </CLPContext.Provider>
      </ThemeProvider>,
    );
  });

  it('should render products correctly', () => {
    const { asFragment } = CategoryListComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
