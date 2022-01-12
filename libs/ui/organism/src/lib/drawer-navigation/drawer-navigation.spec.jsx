import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ThemeProvider } from '@jade/ui/themes';
import { DrawerNavigation } from './drawer-navigation';
import data from './drawer-navigation.data';

describe('<DrawerNavigation />', () => {
  let DrawerNavigationComponent;
  beforeEach(() => {
    DrawerNavigationComponent = render(
      <ThemeProvider>
        <DrawerNavigation />
      </ThemeProvider>,
    );
  });

  test('should render properly', () => {
    const { asFragment } = DrawerNavigationComponent;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render expected number of Nav links', () => {
    const { container } = DrawerNavigationComponent;
    const listOfLinks = container.querySelectorAll('ul li') ?? [];
    expect(listOfLinks.length).toEqual(data.length);
  });
});
