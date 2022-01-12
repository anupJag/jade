import React from 'react';
import { Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink } from '@chakra-ui/core';

/* eslint-disable-next-line */
export type BreadcrumbProps = {
  list: { title: string; url: string; }[]
}

export const Breadcrumb = ({ list }: BreadcrumbProps) => {
  return (<BreadcrumbComponent>
  {list.map(({ title, url }) => {
    return <BreadcrumbItem><BreadcrumbLink href={url}>{title}</BreadcrumbLink></BreadcrumbItem> 
  })}
  </BreadcrumbComponent>
    
  );
};

export default Breadcrumb;
