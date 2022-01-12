import React from 'react';
import { Box, Heading, Rating } from '@jade/ui/atoms';
import { ProductPrice } from '../../atoms/product-price/ProductPrice';
import { ProductTags } from '../../atoms/product-tags/productTags';

export const ProductInfo = ({ product, ...otherProps }) => {
  return (
    <Box {...otherProps}>
      <ProductTags tags={product.marketingTags} />
      <Heading tagName="h1">{product.title}</Heading>
      <Rating rating={product.rating} />
      <Box bg="yellow.50" mt={4} mb={4} p={4}>
        {product.shortDescription}
      </Box>
      <ProductPrice price={product.pricing} />
    </Box>
  );
};

export default ProductInfo;
