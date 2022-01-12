import React from 'react';
import { Product } from '@jade/ui/molecules';
import productMocks from './products-list.mock';
import * as S from './product-list.styled';
import { Slider } from '@jade/ui/organism';

export const ProductList = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const Products = productMocks.map(product => (
    <S.PLCol key={'col-' + product.id}>
      <Product product={product} key={product.id} />
    </S.PLCol>
  ));
  return (
    <S.PLContainer>
      <S.PLRow>
        <Slider {...settings}>{Products}</Slider>
      </S.PLRow>
    </S.PLContainer>
  );
};
