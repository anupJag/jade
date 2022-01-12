import React from 'react';
import { Flex, Text } from '@jade/ui/atoms';

const currency = '$';

export const ProductPrice = ({ price }) => {
  const formattedListPrice = `${currency}${price.list}`;
  const formattedRetailPrice = `${currency}${price.retail}`;
  return (
    <Flex alignItems="baseline">
      <Text mr={2} fontSize="3xl">
        {formattedListPrice}
      </Text>
      <Text as="s" fontSize="xl">
        {formattedRetailPrice}
      </Text>
    </Flex>
  );
};

export default ProductPrice;
