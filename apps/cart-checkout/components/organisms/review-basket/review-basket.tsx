import React, { FC } from 'react';
import { useTheme } from '@jade/ui/themes';
import { Box, Text, Flex, Row, Container, PseudoBox } from '@jade/ui/atoms';
import Card from '../../atoms/card/card';
import CardRow from '../../atoms/card-row/card-row';
import BasketSummary from '../../molecules/basket-summary/basket-summary';
import ApplyCoupon from '../../molecules/apply-coupon/apply-coupon';
import Promotions from '../../molecules/promotions/promotions';
import Router from 'next/router';
import { BasketItem } from '../../molecules/BasketItem';

const list = (data, refetch) => {
  return data?.cart?.bag?.map(d => <BasketItem key={d?.id} data={d} refetch={refetch} />);
};

type Props = {
  data: any;
  refetch?: any;
  promoData: any;
  applyPromo: any;
};

const ReviewBasket: FC<Props> = ({ data, promoData, refetch, applyPromo }) => {
  const theme: any = useTheme();

  const navigateToDeliveryOptions = () => {
    Router.push('/cart/[...slug]', '/cart/delivery-options');
  };

  return (
    <Container withGutter={false} paddingBottom={12}>
      <Box>
        <Text fontSize="2em" pt={4}>
          Review Basket
        </Text>
      </Box>
      <Flex
        alignItems="end"
        justifyContent="space-between"
        flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
        <Box width={['100%', '100%', '100%', '70%']}>{list(data, refetch)}</Box>
        <Box width={['100%', '100%', '100%', '30%']}>
          <BasketSummary cartData={data?.cart} />
          <PseudoBox
            as="button"
            bg={theme.themeColors.primaryColor[400]}
            py={2}
            px={4}
            ml={3}
            w={'100%'}
            m={0}
            rounded="md"
            fontWeight="semibold"
            color="white"
            _hover={{ bg: theme.themeColors.primaryColor[300] }}
            _focus={{ boxShadow: 'outline' }}
            onClick={navigateToDeliveryOptions}>
            Delivery options
          </PseudoBox>
          <Promotions promos={promoData?.fetchApplicablePromotions} applyPromo={applyPromo} />
          <ApplyCoupon />
        </Box>
      </Flex>
    </Container>
  );
};

export default ReviewBasket;
