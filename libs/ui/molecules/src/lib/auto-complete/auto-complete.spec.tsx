import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { AutoComplete } from './auto-complete';

describe('<AutoComplete />', () => {
  let AutoCompleteComponent;

  const onSuggestionChange = jest.fn();
  const onSearchClick = jest.fn();
  const data = [];
  const placeholder = 'Testing placeholder';
  let container;
  let inputEl;

  beforeEach(() => {
    AutoCompleteComponent = render(
      <ThemeProvider>
        <AutoComplete
          onSuggestionChange={onSuggestionChange}
          onSearchClick={onSearchClick}
          data={data}
          placeholder={placeholder}
        />
      </ThemeProvider>,
    );

    ({ container } = AutoCompleteComponent);
    inputEl = container.querySelector('input[type="text"]');
  });

  /**
   * Capturing Sanpshot : AutoComplete
   *
   *  To check style / structure changes in Styled Components
   */
  test('snapshot check', () => {
    const { asFragment } = AutoCompleteComponent;
    expect(asFragment()).toMatchSnapshot();
  });

  test('Search Input should have given placeholder', () => {
    const placeHolderTxt = inputEl.getAttribute('placeholder');
    expect(placeHolderTxt).toEqual(placeholder);
  });

  test('should respond on input click / enter', () => {
    fireEvent.click(inputEl);
    expect(onSearchClick).toHaveBeenCalled();
  });
});
