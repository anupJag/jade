import { Row, Text } from '@jade/ui/atoms';
import React, { FC } from 'react';
import CardRow from '../../atoms/card-row/card-row';
import Card from '../../atoms/card/card';

type Props = {
  cartData: any;
};

const BasketSummary: FC<Props> = ({ cartData }) => {
  return (
    <Card my={2} p={3}>
      <Row withGutter={false} paddingBottom={2}>
        <Text fontSize="1.5em">Basket Summary</Text>
      </Row>
      <CardRow
        withGutter={false}
        leftBox={<span>Sub Total</span>}
        rightBox={
          <Text whiteSpace="nowrap">
            $ {cartData?.bagTotal ? parseFloat(cartData?.bagTotal?.toString()).toFixed(2) : ''}
          </Text>
        }
      />
      <CardRow
        withGutter={false}
        leftBox={<Text>Discounted Price</Text>}
        rightBox={
          <Text>
            {cartData?.discountedPrice
              ? parseFloat(cartData?.discountedPrice?.toString()).toFixed(2)
              : ''}
          </Text>
        }
      />
      <CardRow withGutter={false} leftBox={<Text>Taxes</Text>} rightBox={<Text>-</Text>} />
      <CardRow
        withGutter={false}
        leftBox={<strong>Total</strong>}
        rightBox={
          <Text whiteSpace="nowrap">
            ${cartData?.grandTotal ? parseFloat(cartData?.grandTotal?.toString()).toFixed(2) : ''}
          </Text>
        }
      />
    </Card>
  );
};

export default BasketSummary;
