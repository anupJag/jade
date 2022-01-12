import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';

export const Main = styled.div`
  padding-top: ${props => props.theme.space[8]};
  ${grid.containerFluid(false)}
`;
