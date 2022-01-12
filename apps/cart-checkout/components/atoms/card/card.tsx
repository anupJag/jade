import React, { FC } from 'react';
import { Box } from '@jade/ui/atoms';
import { useTheme } from '@jade/ui/themes';

type Props = {
  [key: string]: any;
};

const Card: FC<Props> = props => {
  const theme: any = useTheme();
  const { children, ...rest } = props;
  return (
    <Box
      border="1px"
      borderColor={theme.colors.gray[200]}
      borderRadius="lg"
      bg={theme.themeColors.neutralColor[100]}
      {...rest}>
      {children}
    </Box>
  );
};

export default Card;
