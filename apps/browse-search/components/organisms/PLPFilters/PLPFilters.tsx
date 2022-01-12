import React, { FC, useContext } from 'react';
import { FilterComponent, ClearFilterComponent } from '@jade/ui/molecules';
import { StyledFilterList } from './PLPFilters.styled';
import { PLPContext } from '../../../stores/plp/Context';

const FilterList: FC = () => {
  const { state } = useContext(PLPContext);
  const { filters } = state;

  return (
    <>
      <ClearFilterComponent />
      <StyledFilterList>
        {filters.map(filter => (
          <FilterComponent key={filter.key} filter={filter} />
        ))}
      </StyledFilterList>
    </>
  );
};

export default FilterList;
