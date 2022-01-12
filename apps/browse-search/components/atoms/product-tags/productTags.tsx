import React from 'react';
import { Stack, Badge } from '@jade/ui/atoms';

export const ProductTags = ({ tags }) => {
  return (
    <Stack isInline>
      {tags.map(tag => (
        <Badge key={tag} variant="outline" variantColor="green">
          {tag}
        </Badge>
      ))}
    </Stack>
  );
};

export default ProductTags;
