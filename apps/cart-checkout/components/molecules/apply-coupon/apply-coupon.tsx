import { PseudoBox, Input, Box } from '@jade/ui/atoms';
import React, { FC } from 'react';
import CardRow from '../../atoms/card-row/card-row';
import Card from '../../atoms/card/card';
import { useTheme } from '@jade/ui/themes';

type Props = {};

const ApplyCoupon: FC<Props> = () => {
  const theme: any = useTheme();
  return (
    <Card my={6} p={3} as={Box}>
      <CardRow
        p={0}
        withGutter={false}
        leftBox={<Input variant="flushed" placeholder="Coupon" />}
        rightBox={
          <PseudoBox
            as="button"
            bg={theme.themeColors.primaryColor[400]}
            py={2}
            px={4}
            ml={3}
            w="full"
            whiteSpace="nowrap"
            m={0}
            rounded="md"
            color="white"
            _hover={{ bg: theme.themeColors.primaryColor[300] }}
            _focus={{ boxShadow: 'outline' }}>
            Apply Coupon
          </PseudoBox>
        }
        noBorders={true}
      />
    </Card>
  );
};

export default ApplyCoupon;
