import React, { FC, useContext } from 'react';
import { Row } from '@jade/ui/atoms';
import { Alert } from '@jade/ui/molecules';
import { ProductTile } from '@jade/ui/organism';
import { ListItem } from './ProductList.styled';
import { PLPContext } from '../../../stores/plp/Context';

const ProductList: FC = () => {
  const { state } = useContext(PLPContext);
  const { filteredProducts, productLoaded } = state;

  if (!productLoaded) {
    return null;
  }

  const Children = filteredProducts.map(product => (
    <ListItem columns={12} key={product.sku}>
      <ProductTile product={product} />
    </ListItem>
  ));

  if (Children.length > 0) {
    return <Row mb="lg">{Children}</Row>;
  }

  return (
    <Alert
      status="info"
      variant="subtle"
      title="Sorry!"
      description="We could not found any results for given criteria!!!"
    />
  );
};

export default ProductList;
