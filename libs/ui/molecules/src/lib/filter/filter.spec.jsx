import React from 'react';
import { render } from '@testing-library/react';

import { FilterComponent } from './filter';
import { ThemeProvider } from '@jade/ui/themes';

const mockFilter = {
    "displayName": "Price",
    "key": "price",
    "type": "range",
    "range": [{
      "start": "*",
      "end": "0.99"
    },{
      "start": "1",
      "end": "4.99"
    }, {
      "start": "5",
      "end": "*"
    }]
  };

const handleOnchange = jest.fn();

describe(' FeSharedMoleculesFilter', () => {
  fit('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <FilterComponent filter={mockFilter} onChange={handleOnchange} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
