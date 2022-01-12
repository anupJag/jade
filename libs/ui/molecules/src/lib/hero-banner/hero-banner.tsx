import React, { FC } from 'react';
import { Link } from '@jade/ui/atoms';
import { Box, Image } from '@jade/ui/atoms';

export type HeroBannerProps = {
  imgUrl: string;
  imgAlt: string;
  linkUrl: string;
  height: string;
};

export const HeroBanner: FC<HeroBannerProps> = ({ imgUrl, imgAlt, linkUrl, height }) => {
  return (
    <Box justifyContent="center" d="flex">
      <Link href={linkUrl}>
        <a>
          <Image src={imgUrl} alt={imgAlt} htmlHeight={height} height={height} objectFit="cover" />
        </a>
      </Link>
    </Box>
  );
};
