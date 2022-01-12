import React from 'react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ItemListProps {}

const StyledItemList = styled.div`
  color: pink;
`;

export const ItemList = (props: ItemListProps) => {
  return (
    <StyledItemList>
      <h1>Welcome to item-list!</h1>
    </StyledItemList>
  );
};

export default ItemList;
