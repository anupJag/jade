import { PseudoBox, Box, Row, Text } from '@jade/ui/atoms';
import React, { FC } from 'react';
import CardRow from '../../atoms/card-row/card-row';
import Card from '../../atoms/card/card';
import { useTheme } from '@jade/ui/themes';

type Props = {
  promos: any;
  applyPromo: any;
};

const Promotions: FC<Props> = ({ promos, applyPromo }) => {
  const theme: any = useTheme();

  const promoItems = promos?.map(promo => (
    <CardRow
      key={promo.id}
      withGutter={false}
      alignItems="center"
      leftBox={<Text>{promo.longDescription}</Text>}
      rightBox={
        <PseudoBox
          as="button"
          bg={theme.themeColors.primaryColor[400]}
          py={1}
          px={2}
          ml={3}
          w="full"
          whiteSpace="nowrap"
          m={0}
          rounded="md"
          color="white"
          onClick={() => applyPromo(promo)}
          _hover={{ bg: theme.themeColors.primaryColor[300] }}
          _focus={{ boxShadow: 'outline' }}>
          Apply
        </PseudoBox>
      }
    />
  ));
  return (
    <Card my={6} p={3} as={Box}>
      <Row withGutter={false} paddingBottom={2}>
        <Text fontSize="1.5em">Applicable Offers</Text>
      </Row>
      {promoItems?.length ? promoItems : <Text>No offers to show</Text>}
    </Card>
  );
};

export default Promotions;
