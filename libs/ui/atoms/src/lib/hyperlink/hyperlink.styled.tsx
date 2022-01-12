import { styled } from '@jade/ui/themes';

export const PrimaryNavLink = styled.a`
  ${props => props.theme.themeColors.navigation.primary}
  position: relative;
  text-decoration: underline;
  &:after {
    width: 100%;
    content: ' ';
    height: ${props => props.theme.space[1]};
    background: ${props => props.theme.themeColors.navigation.afterBackground};
    display: block;
    transform: scaleX(0);
    transition: linear 0.3s transform;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
  &:hover,
  &:focus {
    outline: ${props => props.theme.borders.none};
    text-decoration: none;
    &:after {
      transform: scaleX(1);
    }
  }
`;
export const SecondaryNavLink = styled.a`
  display: flex;
  padding: ${props => props.theme.space[2]};
  border-bottom: ${props => props.theme.borders['1px']}
    ${props => props.theme.themeColors.navigation.secondary.borderBottomColor};
  &:hover,
  &:active,
  &:focus {
    text-decoration: underline;
    outline: ${props => props.theme.borders.none};
  }
`;
