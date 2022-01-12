import React, { FC, useContext } from 'react';
import { useTheme } from '@jade/ui/themes';
import { Box, Text, Flex, PseudoBox, Container, Row } from '@jade/ui/atoms';
import { BasketItem } from '../../molecules/BasketItem';
import Router from 'next/router';
import { CartPageContext } from '../../../pages/cart/[...slug]';
import Card from '../../atoms/card/card';
import CardRow from '../../atoms/card-row/card-row';

type Props = {
  data: any;
  refetch?: any;
  promoData?: any;
  applyPromo?: any;
};

const list = (data, refetch) => {
  return data?.cart?.bag?.map(d => <BasketItem data={d} refetch={refetch} minified={true} />);
};

const navigateToPayment = () => {
  Router.push('/cart/[...slug]', '/cart/payment-options');
};

const OrderSummary: FC<Props> = ({ data }) => {
  const theme: any = useTheme();
  const { addressSelected, appliedPromotion, slotSelected } = useContext(CartPageContext);
  return (
    <Container withGutter={false} paddingBottom={12}>
      <Box>
        <Text fontSize="2em" pt={4}>
          Order Summary
        </Text>
      </Box>
      <Flex
        alignItems="end"
        justifyContent="space-between"
        flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
        <Box width={['100%', '100%', '100%', '70%']}>{list(data, () => {})}</Box>
        <Box width={['100%', '100%', '100%', '30%']}>
          <Card my={2} p={3}>
            <Row withGutter={false} paddingBottom={2}>
              <Text fontSize="1.5em">Delivery Address</Text>
            </Row>

            <CardRow
              leftBox={
                <>
                  <Text>
                    <strong>{addressSelected?.name}</strong>
                  </Text>
                  <Text>{addressSelected?.address}</Text>
                </>
              }
            />
          </Card>
          <Card my={2} p={3}>
            <Row withGutter={false} paddingBottom={2}>
              <Text fontSize="1.5em">Delivery Slot Info</Text>
            </Row>
            <CardRow
              leftBox={
                <Text>
                  <strong>Date:</strong> {slotSelected?.date}
                </Text>
              }
            />
            <CardRow
              leftBox={
                <Text>
                  <strong>Time:</strong> {slotSelected?.value}
                </Text>
              }
              noBorders={true}
            />
          </Card>
          <PseudoBox
            as="button"
            bg={theme.themeColors.primaryColor[400]}
            py={2}
            px={4}
            ml={3}
            mt={4}
            w={'100%'}
            m={0}
            rounded="md"
            fontWeight="semibold"
            color="white"
            _hover={{ bg: theme.themeColors.primaryColor[300] }}
            _focus={{ boxShadow: 'outline' }}
            onClick={navigateToPayment}>
            Proceed to Payment
          </PseudoBox>
        </Box>
      </Flex>
    </Container>
  );
};

export default OrderSummary;
