import React, { FC, useContext, useEffect } from 'react';
import { Box, Text, RadioGroup, Radio } from '@jade/ui/atoms';
import { useTheme } from '@jade/ui/themes';
import { CartPageContext } from 'apps/cart-checkout/pages/cart/[...slug]';

type Props = {};

export const AddressOptions: FC<Props> = ({}) => {
  const theme: any = useTheme();

  const { addressSelected, updateContext } = useContext(CartPageContext);

  useEffect(() => {
    selectAddress({ target: { value: '110001' } });
  }, []);

  const userAddressMock = [
    {
      id: '110001',
      name: 'John Doe',
      address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 110001',
    },
    {
      id: '110002',
      name: 'David Moy',
      address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 110002',
    },
    {
      id: '110003',
      name: 'Danny Heggins',
      address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 110003',
    },
  ];

  const selectAddress = event => {
    const address = userAddressMock.find(el => el.id === event.target.value);
    updateContext('ADDRESS', address);
  };

  return (
    <Box mb={4}>
      <Text fontSize="1.5rem" my={3}>
        Address
      </Text>
      <RadioGroup
        defaultValue={'110001'}
        value={addressSelected?.id}
        onChange={e => selectAddress(e)}>
        {userAddressMock.map(el => (
          <Radio value={el.id} key={el.id} my={2} variantColor="orange">
            <Box ml={3}>
              <Text fontSize="1rem" fontWeight={theme.themeFontWeights.bold}>
                {el.name}
              </Text>
              <Box>{el.address}</Box>
            </Box>
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
};
