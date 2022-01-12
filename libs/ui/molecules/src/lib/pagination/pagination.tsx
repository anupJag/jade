import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { styled } from '@jade/ui/themes';

type Props = {
  className?: string;
  onChange: (page) => void;
  totalPages: number;
  selectedPage?: number;
};

const PaginationComponent: FC<Props> = ({ className, onChange, totalPages, selectedPage }) => {
  const onPageChange = (page) => {
    const pageIndex = page.selected + 1;

    if(pageIndex !== selectedPage) {
      onChange(pageIndex);
    }
  };

  return (
    <ReactPaginate
      containerClassName={className} 
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      initialPage={selectedPage ? selectedPage - 1 : 1}
    />
  );
};

export const Pagination = styled(PaginationComponent)`
  list-style: none;
  display: inline-flex;
  border: 1px solid #d3d3d3;
  border-radius: 4px;

  li {
    padding: 5px 10px;
    cursor: pointer;

    &:not(:last-child) {
      border-right: 1px solid #d3d3d3;
    }

    &.selected {
      ${props => props.theme.themeColors.cta.primary};
    }

    &.disabled {
      opacity: 0.1;
      cursor: default;
    }

    
  }
`;

export default Pagination;
