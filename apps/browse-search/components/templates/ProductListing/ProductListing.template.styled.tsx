import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';

export const LeftContent = styled('aside')`
  ${grid.colWithCount(12)}
  background: #f2f2f2;

  ${props => props.theme.mediaQueries.lg} {
    ${grid.colWithCount(2)}
  }

  ${props => props.theme.mediaQueries.md} {
    ${grid.colWithCount(3)}
  }
`;

export const RightContent = styled('div')`
  ${grid.colWithCount(12)}

  ${props => props.theme.mediaQueries.lg} {
    ${grid.colWithCount(10)}
  }

  ${props => props.theme.mediaQueries.md} {
    ${grid.colWithCount(9)}
  }
`;
