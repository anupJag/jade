import React, { FunctionComponent } from 'react';
import { Link } from '@jade/ui/atoms';
import { Box, Flex, Image, Heading } from '@jade/ui/atoms';
import { CategoryTile as CategoryTileType } from '../../types';
import { SLUG_TYPES } from '@jade/ui/utils';

type CategoryTileProps = {
  category: CategoryTileType;
};

// TODO: Need to refactor this according to the gateway data
export const CategoryTile: FunctionComponent<CategoryTileProps> = ({ category }) => {
  const { image, name, categoryIdentifier } = category;
  const hrefTemplate = { pathname: `/c/[...${SLUG_TYPES.c}]` };
  const asUrl = { pathname: `/c${categoryIdentifier}` };

  return (
    <Box py="xl" mb="sm" overflow="hidden" textAlign="center" boxShadow="1px 1px 5px #d3d3d3">
      <Flex justify="space-around" mb="sm">
        <Link href={hrefTemplate} as={asUrl}>
          <Image src={image} objectFit="cover" htmlHeight="200px" htmlWidth="200px" />
        </Link>
      </Flex>
      <Heading tagName="h3">{name}</Heading>
    </Box>
  );
};
