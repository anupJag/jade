import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { PLPContext } from '../../../../stores/plp/Context';

import mockResponse from '../../../../public/mock/PLP.json';

import PLPFilters from '../index';

describe('PLP Filters', () => {
  let FilterComponent = '';
  const dispatch = jest.fn();

  beforeEach(() => {
    const filters = mockResponse.filters;
    const mockState = {
      filters,
    };
    FilterComponent = render(
      <ThemeProvider>
        <PLPContext.Provider value={{ state: mockState, dispatch }}>
          <PLPFilters />
        </PLPContext.Provider>
      </ThemeProvider>,
    );
  });

  it('should render filter option correctly', () => {
    const { getByText } = FilterComponent;
    expect(getByText('Price')).toBeInTheDocument();
    expect(getByText('Ratings')).toBeInTheDocument();
  });

  it('should dispatch action on selecting filter', () => {
    const { getByLabelText } = FilterComponent;
    fireEvent.click(getByLabelText('less than $0.99'));
    expect(dispatch).toHaveBeenCalled();
  });
});
