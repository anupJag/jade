import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';

interface Props {
  bg?: string;
}

export const Main = styled.div`
  ${grid.containerFluid(false)}
  background: ${(props: Props) => props.bg || 'none'}
`;
