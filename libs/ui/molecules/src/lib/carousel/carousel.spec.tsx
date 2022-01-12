import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import '@testing-library/jest-dom/extend-expect';

import { Carousel } from './carousel';

const matchByAriaLabel = label => {
  return (content, element) => element.getAttribute('aria-label') === label;
};

describe('<Carousel />', () => {
  let CarouselComponent;
  beforeEach(() => {
    CarouselComponent = render(
      <ThemeProvider>
        <Carousel>
          {[1, 2, 3, 4, 5].map(slide => (
            <div key={slide}>{slide}</div>
          ))}
        </Carousel>
      </ThemeProvider>,
    );
  });

  test('should render correctly', () => {
    const { asFragment, getByText } = CarouselComponent;
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(matchByAriaLabel('next'))).toBeInTheDocument();
    expect(getByText(matchByAriaLabel('prev'))).toBeInTheDocument();
    expect(getByText(matchByAriaLabel('item 1 of 5'))).toBeInTheDocument();
  });

  test('should contain first slide as visible', () => {
    const { getByRole } = CarouselComponent;
    expect(getByRole('listitem')).toHaveTextContent('1');
  });

  test('on click next, second slide should become visible', () => {
    const { getByRole, getByText } = CarouselComponent;
    fireEvent.click(getByText((content, element) => element.getAttribute('aria-label') === 'next'));
    expect(getByRole('listitem')).toHaveTextContent('2');
  });

  test('on click prev, first slide should become visible if current slide is second', () => {
    const { getByRole, getByText } = CarouselComponent;
    fireEvent.click(getByText(matchByAriaLabel('next')));
    expect(getByRole('listitem')).toHaveTextContent('2');
    fireEvent.click(getByText(matchByAriaLabel('prev')));
    expect(getByRole('listitem')).toHaveTextContent('1');
  });

  test('on click dots, corresponding slide should become visible', () => {
    const { getByRole, getByText } = CarouselComponent;
    fireEvent.click(getByText(matchByAriaLabel('item 3 of 5')));
    expect(getByRole('listitem')).toHaveTextContent('3');
  });
});

describe('Carousel with options', () => {
  test('should not show arrows if showArrow is false', () => {
    const { queryByText } = render(
      <ThemeProvider>
        <Carousel showArrow={false}>
          {[1, 2, 3, 4, 5].map(slide => (
            <div key={slide}>{slide}</div>
          ))}
        </Carousel>
      </ThemeProvider>,
    );

    expect(queryByText(matchByAriaLabel('prev'))).not.toBeInTheDocument();
    expect(queryByText(matchByAriaLabel('next'))).not.toBeInTheDocument();
  });

  test('should not show dots if showDots is false', () => {
    const { queryByText } = render(
      <ThemeProvider>
        <Carousel showDots={false}>
          {[1, 2, 3, 4, 5].map(slide => (
            <div key={slide}>{slide}</div>
          ))}
        </Carousel>
      </ThemeProvider>,
    );

    expect(queryByText(matchByAriaLabel('item 1 in 5'))).not.toBeInTheDocument();
  });

  test('should show 2 slides if slidesToShow is 2', () => {
    const { queryAllByRole } = render(
      <ThemeProvider>
        <Carousel showDots={false} slidesToShow={2}>
          {[1, 2, 3, 4, 5].map(slide => (
            <div key={slide}>{slide}</div>
          ))}
        </Carousel>
      </ThemeProvider>,
    );

    expect(queryAllByRole('listitem')).toHaveLength(2);
  });
});
