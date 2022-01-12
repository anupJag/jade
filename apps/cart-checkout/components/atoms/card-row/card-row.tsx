import React, { FC } from 'react';
import { Box } from '@jade/ui/atoms';
import { useTheme } from '@jade/ui/themes';

type Props = {
  leftBox?: JSX.Element;
  rightBox?: JSX.Element;
  noBorders?: boolean;
  withGutter?: boolean;
  alignItems?: string;
  p?: number;
  m?: number;
};

const CardRow: FC<Props> = props => {
  const theme: any = useTheme();
  const { leftBox, rightBox, noBorders, ...rest } = props;
  return (
    <Box
      py={2}
      borderTop={noBorders ? 0 : `1px solid ${theme.colors.gray[200]}`}
      {...rest}
      justifyContent="space-between"
      display="flex"
      flexWrap="nowrap">
      {leftBox && <Box>{leftBox}</Box>}
      {rightBox && <Box>{rightBox}</Box>}
    </Box>
  );
};

export default CardRow;
