import { css } from '@emotion/core';
import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';

const { containerFluid, row, colWithCount } = grid;

export const Header = styled.header`
  ${containerFluid()}
  box-shadow: ${props => props.theme.shadows.sm};
`;

export const HeaderRow = styled.div`
  ${row()}
`;

export const CompWrapper = styled.div`
  display: flex;
`;

export const HeaderUI1 = styled.div`
  ${colWithCount(12)}
  ${row(false)}
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
  align-items: center;
  ${props => css`
    ${props.theme.mediaQueries.md} {
      padding-top: ${props.theme.space[3]};
      padding-bottom: ${props.theme.space[3]};
    }
  `}
`;
export const HeaderUI2 = styled.div``;
