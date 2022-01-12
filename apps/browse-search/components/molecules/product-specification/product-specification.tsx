import React, { FC } from 'react';
import { Stack, Box } from '@jade/ui/atoms';
import { Divider } from '@chakra-ui/core';

type Props = {
  specifications: {
    title: string;
    detail: string;
  }[];
};

export const ProductSpecification: FC<Props> = ({ specifications }) => {
  return (
    <Stack spacing="16">
      {specifications.map((spec, index) => (
        <>
          <Box>{spec}</Box>
          {index !== specifications.length - 1 ? <Divider my="8" /> : null}
        </>
      ))}
    </Stack>
  );
};

export default ProductSpecification;
