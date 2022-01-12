import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';

const { container, row, colWithCount } = grid;

export const Container = styled.div`
  ${container()}
`;
export const Nav = styled.nav`
  ${row()}
`;
export const NavList = styled.ul`
  ${colWithCount(12)}
  list-style-type: none;
`;
export const NavItem = styled.li``;
