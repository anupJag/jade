import React from 'react';
import { Heading } from '@jade/ui/atoms';
import { Carousel } from '@jade/ui/molecules';
import { ProductCarouselTile } from '@jade/ui/organism';
import { Product } from '@jade/ui/organism/types';

type Props = {
  heading: string | any;
  products: Product[];
};

export const ProductCarousel = ({ heading, products }: Props) => {
  const Children = products.map((product: Product) => (
    <ProductCarouselTile key={product.sku} product={product} />
  ));

  if (Children.length > 0) {
    return (
      <div>
        <Heading tagName="h2">{heading}</Heading>
        <Carousel slidesToShow={3}>{Children}</Carousel>
      </div>
    );
  }

  return null;
};
