import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '@jade/ui/themes';
import { Heading } from './heading';

describe('<Styled Component : Heading />', () => {
  let HeadingComponent;
  const listOfStyledTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  beforeEach(() => {
    HeadingComponent = render(
      <ThemeProvider>
        {listOfStyledTags.map(tag => (
          <Heading key={tag} tagName={tag}>
            {tag}
          </Heading>
        ))}
      </ThemeProvider>,
    );
  });

  /**
   * Capturing Sanpshot : HeadingComponent
   *
   *  To check style / structure changes in Styled Components
   */
  test("snapshot check for HeadingComponent's Styled components", () => {
    const { asFragment } = HeadingComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
