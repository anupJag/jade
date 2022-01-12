import React from 'react';
import { ThemeProvider } from '@jade/ui/themes';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import DynamicHeadingContent from './DynamicHeadingContent';

describe('DYNAMIC HEADING CONTENT', () => {
  test('should render without any error', () => {
    const props = {
      data: {
        title: 'Testing Dynamic content',
      },
    };

    render(
      <ThemeProvider>
        <DynamicHeadingContent data={props.data} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('heading-content-wrapper')).toBeDefined();
  });

  test('should render `TITLE` passed in props', () => {
    const props = {
      data: {
        title: 'Testing Dynamic content',
      },
    };

    render(
      <ThemeProvider>
        <DynamicHeadingContent data={props.data} />
      </ThemeProvider>,
    );

    expect(screen.getByText(props.data.title)).toBeInTheDocument();
  });

  test('should render dangerously set `content`', () => {
    const props = {
      data: {
        title: 'Testing Dynamic content',
        content: `<div data-testid='dynamic-content'>RENDERED AS DANEGROUS SET INNER HTML</div>`,
      },
    };

    render(
      <ThemeProvider>
        <DynamicHeadingContent data={props.data} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('dynamic-content')).toBeDefined();
  });
});
