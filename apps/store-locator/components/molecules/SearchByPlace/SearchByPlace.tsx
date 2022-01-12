import React, { FC, useState } from 'react';
import Paper from '@material-ui/core/Paper';

import { SearchInput } from './SearchByPlace.style';

// Core
import { Heading, Box, Button, Icon, Flex, Input, Link } from '@jade/ui/atoms';

interface SearchByPlaceProps {}
/**
 * Component : Search
 *
 * A search component which contains autocomplete and search icon
 *
 * @param {SearchByPlaceProps} {
 * }
 * @returns
 */
export const SearchByPlace: FC<SearchByPlaceProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = e => {
    setSearchQuery(e);
  };

  return (
    <> 
      <Box d="flex" justifyContent="center" mb="8">
        <Icon name="search" aria-hidden="true" />
      </Box>

      <Box d="flex" justifyContent="center" mb="8">
        <Heading tagName="h5">Search by PostalCode</Heading>
      </Box>

      <Box d="flex" justifyContent="center">
        <Flex>
          <SearchInput>
            <Input
              variant="outline"
              placeholder="Enter Postalcode"
              onChange={e => onSearch(e.target.value)}
            />
          </SearchInput>
        </Flex>

        <Link href={`/store-locator/results?query=${searchQuery}`}>
          <Button variantColor="orange" variant="solid" width="auto">
            <Icon name="chevron-right" aria-hidden="true" />
          </Button>
        </Link>
      </Box>
    </>
  );
};
