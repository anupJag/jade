import React, { FC } from 'react';
import { Select, FormControl, FormLabel } from '@chakra-ui/core';

type Props = {
  onSort: (sortCriteria) => void, 
  sortOptions: {
    label: string;
    value: string;
  }[], 
  selectedSort?: string; 
}
export const Sort: FC<Props> = ({ onSort, sortOptions, selectedSort }) => {
  const sortHandler = e => {
    const value  = e.target.value;
    onSort(value);
  }

  return (
    <FormControl d="flex" alignItems="center">
      <FormLabel htmlFor="sort" whiteSpace="nowrap" fontSize="sm">Sort by</FormLabel>
      <Select id="sort" onChange={sortHandler} value={selectedSort} placeholder="Select Sort Order" size="sm">
        {sortOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
      </Select>
    </FormControl>
  );
};

export default Sort;
