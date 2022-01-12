import React, { FC, useContext } from 'react';
import { FilterComponent } from '@jade/ui/molecules';
import { StyledFilterList } from './filter-list.styled';
import { PLPContext } from '../../../stores/plp/Context';

const FilterList: FC = () => {
  const { state, dispatch } = useContext(PLPContext);
  const { filters } = state;

  return (
    <StyledFilterList>
      {filters.map(filter => (
        <FilterComponent key={filter.key} filter={filter} />
      ))}
    </StyledFilterList>
  );
};

export default FilterList;
