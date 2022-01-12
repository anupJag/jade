import React, { FC } from 'react';
import * as S from './heading.styled';

export type ValidHeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  tagName: ValidHeadings;
};
export const Heading: FC<HeadingProps> = ({ tagName, children }) => {
  const Tag = S[tagName];
  return <Tag>{children}</Tag>;
};
