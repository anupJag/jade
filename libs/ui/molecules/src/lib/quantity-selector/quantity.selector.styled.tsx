import { styled } from '@jade/ui/themes';
import { Button, IconButton } from '@jade/ui/atoms';

export const StyledIconButton = styled(IconButton)`
  ${props => props.theme.themeColors.cta.primary};
`;

export const StyledButton = styled(Button)`
  ${props => props.theme.themeColors.cta.primary};
`;
