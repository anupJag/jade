import React, { FC } from 'react';
import { Head } from '@jade/ui/atoms';
import { HeadProps } from './index';

export const PageHead: FC<HeadProps> = ({ title, description, keywords, children }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    {children}
  </Head>
);
