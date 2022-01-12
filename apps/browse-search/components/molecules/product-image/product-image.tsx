import React, { useState } from 'react';
import { Stack, Image, Flex } from '@chakra-ui/core';
import { Carousel } from '@jade/ui/molecules';

/* eslint-disable-next-line */
export type ProductImageProps = {
  images: {
    url: string;
    altText: string;
  }[];
};

const fallbackImg = 'http://via.placeholder.com/400x300';

export const ProductImage = ({ images }: ProductImageProps) => {
  const [selected, setselected] = useState(0);

  return (
    <Carousel showArrow={false}>
      {images.map(({ url, altText }) => (
        <Image
          key={url}
          src={url}
          fallbackSrc={fallbackImg}
          htmlHeight="300px"
          htmlWidth="400px"
          alt={altText}
          objectFit="cover"
          size="100%"
        />
      ))}
    </Carousel>
  );
};

export default ProductImage;
