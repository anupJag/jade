import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';

export const LeftContent = styled('div')`
  margin-top ${props => props.theme.space[5]};
  ${grid.colWithCount(12)}

  ${props => props.theme.mediaQueries.md} {
    ${grid.colWithCount(6)}
  }
`;

export const RightContent = styled('div')`
  margin-top ${props => props.theme.space[5]};
  ${grid.colWithCount(12)}

  ${props => props.theme.mediaQueries.md} {
    ${grid.colWithCount(6)}
  }
`;
