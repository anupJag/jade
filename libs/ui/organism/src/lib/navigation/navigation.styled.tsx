import { styled } from '@jade/ui/themes';

export const Nav = styled.nav``;
export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
export const NavItem = styled.li`
  margin: 0 0 0 ${props => props.theme.space[8]};
  padding: 0;
`;
