import { styled } from '@jade/ui/themes';
import { Col } from '@jade/ui/atoms';
import { grid } from '@jade/ui/utils';

export const ListItem = styled(Col)`
  box-shadow: 2px 0px 2px 0px #d3d3d3;
  margin-bottom: ${props => props.theme.space.sm};

  ${props => props.theme.mediaQueries.sm} {
    ${grid.colWithCount(6)}
  }

  ${props => props.theme.mediaQueries.lg} {
    ${grid.colWithCount(3)}
  }
`;
