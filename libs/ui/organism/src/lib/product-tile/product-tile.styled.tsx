import { styled } from '@jade/ui/themes';
import { Box } from '@jade/ui/atoms';

export const ProductDescription = styled(Box)`
  background: ${props => props.theme.themeColors.background.descriptiveArea};
  height: 4.7rem;
  overflow: hidden;
`;

export const ProductName = styled(Box)`
  height: 3rem;
  overflow: hidden;
`;
