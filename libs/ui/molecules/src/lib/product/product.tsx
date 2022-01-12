import React, { FC } from 'react';
import { ProductProps } from './product.type';
import { Badge, Box, Button, Icon, Image } from '@jade/ui/atoms';

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <Box maxW="xs" borderWidth="1px" rounded="lg" overflow="hidden" mt="8" mx="auto">
      <Image src={product.imageUrl} alt={product.imageAlt} />

      <Box p="4">
        <Box d="flex" alignItems="baseline" h="5">
          {product.onSale ? (
            <Badge rounded="full" px="2" variantColor="blue">
              On sale now
            </Badge>
          ) : null}
        </Box>
        <Box mt="1" h="16" fontWeight="semibold" as="h4" lineHeight="tight">
          {product.title}
        </Box>

        <Box>
          {product.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            {product.priceUnit}
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon name="star" key={i} color={i < product.rating ? 'yellow.500' : 'gray.300'} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {product.reviewCount} reviews
          </Box>
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          <Button variantColor="orange" variant="solid" width="100%">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
