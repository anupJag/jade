import { styled } from '@jade/ui/themes';
import { Button } from '@jade/ui/atoms';

export const StyledButton = styled(Button)`
  ${props => props.theme.themeColors.cta.primary};
  width: 100%;
`;
