import React, { FunctionComponent } from 'react';
import { Link } from '@jade/ui/atoms';
import { Box, Flex, Icon, Image } from '@jade/ui/atoms';
import { ProductDescription, ProductName } from './product-tile.styled';
import { ProductAddToCart } from '@jade/ui/organism';
import { Product } from '../../types';

const fallbackImg = 'http://via.placeholder.com/150x120';

type ProductTileProps = {
  product: Product;
};

// TODO: Need to refactor this according to the gateway data
export const ProductTile: FunctionComponent<ProductTileProps> = ({ product }) => {
  const {
    images,
    title,
    productUrl,
    shortDescription,
    pricing: { list },
    rating: { value, count },
  } = product;
  const { url, altText } = images[0];
  return (
    <Box p="sm" mb="sm" borderStyle="solid" rounded="lg" overflow="hidden">
      <Link href={'/p/[product-slug]'} as={productUrl}>
        <ProductName as="h3" fontWeight="600" mb="sm">
          {title}
        </ProductName>
      </Link>
      <Flex justify="space-around" mb="sm">
        <Link href={'/p/[product-slug]'} as={productUrl}>
          <Image
            src={url}
            fallbackSrc={fallbackImg}
            alt={altText}
            objectFit="cover"
            htmlHeight="120px"
            htmlWidth="150px"
          />
        </Link>
      </Flex>
      <Flex justify="space-between">
        <Box fontWeight="600" mb="sm">{`$${list}`}</Box>

        <Box d="flex">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon name="star" key={i} color={i < value ? 'yellow.500' : 'gray.300'} />
            ))}
          {count && (
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              ({count})
            </Box>
          )}
        </Box>
      </Flex>
      {shortDescription && (
        <ProductDescription p="xs" fontSize="sm" mb="lg">
          {shortDescription}
        </ProductDescription>
      )}
      <ProductAddToCart product={product} />
    </Box>
  );
};
