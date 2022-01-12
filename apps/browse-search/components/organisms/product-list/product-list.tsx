import React, { FC, useContext } from 'react';
import { Row } from '@jade/ui/atoms';
import { ProductTile } from '@jade/ui/organism';
import { ListItem } from './product-list.styled';
import { PLPContext } from '../../../stores/plp/Context';

const ProductList: FC = () => {
  const { state } = useContext(PLPContext);
  const { filteredProducts } = state;

  const Children = filteredProducts.map(product => (
    <ListItem columns={12} key={product.id}>
      <ProductTile product={product} />
    </ListItem>
  ));

  if (Children.length > 0) {
    return <Row mb="lg">{Children}</Row>;
  }

  return null;
};

export default ProductList;
