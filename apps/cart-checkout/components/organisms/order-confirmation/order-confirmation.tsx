import React, { FC } from 'react';
import { useTheme } from '@jade/ui/themes';
import { Button, Box, Text, Flex } from '@jade/ui/atoms';

const OrderConfirmation: FC = () => {
  const theme: any = useTheme();
  return (
    <>
      <Text fontSize="2em" mt={2}>
        Order Confirmation
      </Text>
      <Flex
        alignItems="end"
        justifyContent="space-between"
        flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
        <Box width={['100%', '100%', '100%', '70%']}>
          <Box h="10rem" m={2} border="1px" borderColor={theme.colors.gray[200]} p={2}>
            Item 1
          </Box>
          <Box h="10rem" m={2} border="1px" borderColor={theme.colors.gray[200]} p={2}>
            Item 2
          </Box>
          <Box h="10rem" m={2} border="1px" borderColor={theme.colors.gray[200]} p={2}>
            Item 3
          </Box>
        </Box>
        <Box width={['100%', '100%', '100%', '30%']}>
          <Box
            h="20rem"
            my={1}
            p={2}
            border="1px"
            borderColor={theme.colors.gray[200]}
            borderRadius="lg">
            <Text fontSize="1.5em">Order Confirmation</Text>
          </Box>
          <Button variantColor="orange" variant="solid" width="100%">
            Checkout
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default OrderConfirmation;
