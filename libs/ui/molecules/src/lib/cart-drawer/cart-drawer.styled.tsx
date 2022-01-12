import { styled } from '@jade/ui/themes';
import { Box, Button } from '@jade/ui/atoms';

export const FooterButtonContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FooterButton = styled(Button)`
  width: 50%;
  margin-left: 5px;
  margin-right: 5px;
  a {
    border: none;
  }
`;
