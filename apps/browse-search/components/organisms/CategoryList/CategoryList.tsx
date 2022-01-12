import React, { FC, useContext } from 'react';
import { Grid } from '@jade/ui/atoms';
import { CategoryTile } from '@jade/ui/organism';
import { CLPContext } from '../../../stores/clp/Context';

const CategoryList: FC = () => {
  const { state } = useContext(CLPContext);
  const { categories } = state;

  const Children = categories.map(category => (
    <CategoryTile category={category} key={category.name} />
  ));

  if (Children.length > 0) {
    return (
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={6}>
        {Children}
      </Grid>
    );
  }

  return null;
};

export default CategoryList;
