import { styled } from '@jade/ui/themes';
import { accessibility } from '@jade/ui/utils';

export const SkipArea = styled.div`
  background: ${props => props.theme.themeColors.background.highlightArea};
`;
export const SkipAnchor = styled.a`
  ${accessibility.srOnly()}
  ${accessibility.srOnlyFocusable()}
  &:focus, &:active {
    color: ${props => props.theme.themeColors.textColor.highlightArea};
    text-decoration: underline;
    padding: ${props => props.theme.space.xs};
    display: inline-block;
    margin: ${props => props.theme.space.xxs};
    ${props => props.theme.themeBorders.highlightedLinksOutline};
    outline-offset: 2px;
  }
`;
