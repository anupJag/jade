import React, { FunctionComponent } from 'react';
import { Link } from '@jade/ui/atoms';
import { Box, Flex, Image } from '@jade/ui/atoms';
// TODO: fix { withTheme } from 'emotion-theming';
import { withTheme } from 'emotion-theming';
import { ProductAddToCart } from '@jade/ui/organism';
import { Product } from '@jade/ui/organism/types';

type ProductCarouselTileProps = {
  product: Product;
  theme?: any;
};

const ProductCarouselTileComponent: FunctionComponent<ProductCarouselTileProps> = ({
  product,
  theme,
}: ProductCarouselTileProps) => {
  const { images, title, pricing: { list }, unitOfMeasure, productUrl } = product;
  const { url, altText } = images[0];
  return (
    <Box
      p="sm"
      m="sm"
      borderWidth="1px"
      borderColor={theme.themeColors.neutralColor[300]}
      borderStyle="solid"
      rounded="lg"
      overflow="hidden">
      <Flex justify="space-around" mb="sm">
        <Link href={productUrl}>
          <Image
            src={url}
            alt={altText}
            objectFit="cover"
            htmlHeight="150px"
            htmlWidth="150px"
            size="150px"
          />
        </Link>
      </Flex>
      <Box>
        <Link href={productUrl}>
          <a>
            <Box
              as="h3"
              height="4.5rem"
              overflow="hidden"
              fontWeight={theme.themeFontWeights.medium}
              mb="sm">
              {title}
            </Box>
          </a>
        </Link>
        <Box mb="sm">({`$${list}`} / {unitOfMeasure.unitType} )</Box>
        <Box fontWeight={theme.themeFontWeights.medium} mb="lg">{`$${list}`}</Box>
        <ProductAddToCart product={product} />
      </Box>
    </Box>
  );
};

export const ProductCarouselTile = withTheme(ProductCarouselTileComponent);
