import React, { FC } from 'react';
import { Box, Image } from '@jade/ui/atoms';

interface StoreImageProps {
  imageUrl: string;
  imageSize: string;
}

export const StoreImage: FC<StoreImageProps> = ({ imageUrl, imageSize }) => {
  let imgMaxHeight;

  if (imageSize === 'sm') {
    imgMaxHeight = 130;
  } else if (imageSize === 'lg') {
    imgMaxHeight = 250;
  }

  return (
    <Box>
      <Image maxHeight={imgMaxHeight + 'px'} src={imageUrl} alt="image alt" />
    </Box>
  );
};
