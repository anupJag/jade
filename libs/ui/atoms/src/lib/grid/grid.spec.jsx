import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '@jade/ui/themes';
import * as S from './grid';

describe('<Styled Component : Grid />', () => {
  let Grid;
  beforeEach(() => {
    Grid = render(
      <ThemeProvider>
        {/* With Default Values */}
        <S.Container>
          <S.Row>
            <S.Col></S.Col>
          </S.Row>
        </S.Container>
        {/* With Props :  snapshot check for props change in future */}
        <S.Container isFluid={true}>
          <S.Row withGutter={true}>
            <S.Col columns={1}></S.Col>
          </S.Row>
        </S.Container>
      </ThemeProvider>,
    );
  });

  /**
   * Capturing Sanpshot : Grid
   *
   *  To check style / structure changes in Styled Components
   */
  test("snapshot check for Grid's Styled components", () => {
    const { asFragment } = Grid;
    expect(asFragment()).toMatchSnapshot();
  });
});
