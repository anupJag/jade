import React from 'react';
import { render } from '@testing-library/react';

import Sort from './sort';

describe('Sort', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sort onSort={jest.fn} sortOptions={[{label: 'test', value: 'price|1'}, {label: 'test-ase', value: 'price|-1'}]}/>);
    expect(baseElement).toBeTruthy();
  });
});
