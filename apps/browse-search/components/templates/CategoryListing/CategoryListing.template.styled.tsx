import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';

export const LeftContent = styled('aside')`
  ${grid.colWithCount(12)}
  background: ${props => props.theme.themeColors.background.plpNavigation};
  padding-right: 0;
  padding-top: ${props => props.theme.space.sm};

  ${props => props.theme.mediaQueries.md} {
    ${grid.colWithCount(3)}
  }
`;

export const RightContent = styled('div')`
  ${grid.colWithCount(12)}

  ${props => props.theme.mediaQueries.md} {
    ${grid.colWithCount(9)}
  }
`;
