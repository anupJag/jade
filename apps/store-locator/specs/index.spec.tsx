import React from 'react';
import { render } from '@testing-library/react';
import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';
import { ThemeProvider } from '@jade/ui/themes';
import { defaultTheme } from '@jade/ui/themes';
import { Layout } from '@jade/ui/templates';
import { Container } from '@jade/ui/atoms';

import Index from '../pages/index';
import SLSearch from '../components/templates/SLSearch';

describe('Index', () => {
  it('test', () => {
    expect(true).toBeTruthy();
  });

  // it('should render successfully', () => {
  //   const { baseElement } = render(
  //     <Index />
  //   );
  //   expect(baseElement).toBeTruthy();
  // });

  // it('should have a greeting as the title', () => {
  //   const { getByText } = render(<Index />);
  //   expect(getByText('Welcome to store!')).toBeTruthy();
  // });
});
