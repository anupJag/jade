import React from 'react';
import { render } from '@testing-library/react';
import BasketSummary from './basket-summary';

describe('BasketSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasketSummary data={{}} />);
    expect(baseElement).toBeTruthy();
  });
});
