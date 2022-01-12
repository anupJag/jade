import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import { SearchByPlace } from './index';

describe('SearchByPlace', () => {
  let SearchByPlaceComponent = '';

  beforeEach(() => {
    SearchByPlaceComponent = render(
      <ThemeProvider>
        <SearchByPlace />
      </ThemeProvider>,
    );
  });

  it('should render search by place correctly', () => {
    const { asFragment } = SearchByPlaceComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
