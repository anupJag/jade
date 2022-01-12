import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import '@testing-library/jest-dom/extend-expect';

import { Navigation } from './navigation';

const NO_OF_NAVIATION_LINKS = 3;

describe('<Navigation />', () => {
  let NavigationComponent;
  const drawerHandlerMock = jest.fn();

  beforeEach(() => {
    NavigationComponent = render(
      <ThemeProvider>
        <Navigation drawerHandler={drawerHandlerMock} />
      </ThemeProvider>,
    );
  });

  test('should render correctly', () => {
    const { asFragment, getByText } = NavigationComponent;
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render all Navigation links', () => {
    const { container } = NavigationComponent;
    expect(container.querySelectorAll('a').length).toEqual(NO_OF_NAVIATION_LINKS);
  });

  describe('Link :', () => {
    let categoryEl;
    let container;

    beforeEach(() => {
      ({ container } = NavigationComponent);
      categoryEl = container.querySelector('a[title="Categories"]');
    });

    test('Categories should have sub naviation', () => {
      const isLinkHasSubNav = categoryEl.hasChildNodes();
      expect(isLinkHasSubNav).toBeTruthy();
    });

    test('Categories should call handler function on click of link', () => {
      fireEvent.click(categoryEl);
      expect(drawerHandlerMock).toHaveBeenCalledTimes(1);
    });

    test('Categories should have href & title values', () => {
      const isHrefProvided = categoryEl.getAttribute('href');
      const isTitleProvided = categoryEl.getAttribute('title');
      expect(isHrefProvided).toBeTruthy();
      expect(isTitleProvided).toBeTruthy();
    });

    test('Offers should have href & title values', () => {
      const offersEl = container.querySelector('a[title="Offers"]');
      const isHrefProvided = offersEl.getAttribute('href');
      const isTitleProvided = offersEl.getAttribute('title');
      expect(isHrefProvided).toBeTruthy();
      expect(isTitleProvided).toBeTruthy();
    });

    test('Help should have href & title values', () => {
      const helpEl = container.querySelector('a[title="Help"]');
      const isHrefProvided = helpEl.getAttribute('href');
      const isTitleProvided = helpEl.getAttribute('title');
      expect(isHrefProvided).toBeTruthy();
      expect(isTitleProvided).toBeTruthy();
    });
  });
});
