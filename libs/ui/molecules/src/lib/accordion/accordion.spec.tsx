import React from 'react';
import { render } from '@testing-library/react';

import { Accordionn } from './accordion';

describe(' Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accordionn />);
    expect(baseElement).toBeTruthy();
  });
});
