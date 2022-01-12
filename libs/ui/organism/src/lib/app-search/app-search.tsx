import React, { FC, memo, useCallback, useRef } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { throttle } from 'throttle-debounce';
import { Search } from '@jade/ui/organism';
import { defineAppSearchVarFn, QUERY_APP_SEARCH } from './queries';
import { useRouter } from 'next/router';

/**
 * Component : AppSearchComp
 *
 * Global App Search bar
 *
 * @returns
 */
const AppSearchComp: FC = () => {
  const prevSuggestions = useRef([]);
  const router = useRouter();

  const [query, { data }] = useLazyQuery<any>(QUERY_APP_SEARCH);

  /**
   * Callback :
   *  To get entered value from autocomplete component
   *  functionalities will be implemented
   *
   */
  const fetchSearchValue = useCallback(searchValue => {
    if (typeof searchValue === 'string') {
      router.push('/s/[search-slug]', `/s/${searchValue}`);
    } else if (searchValue && searchValue.productUrl) {
      router.push('/p/[product-slug]', searchValue.productUrl);
    }
  }, []);

  /**
   * Callback :
   *  To get suggestion from autocomplete component
   *  query suggestion value from DB
   *
   */
  const fetchSuggestionValue = useCallback(
    throttle(1500, searchText => {
      const variables = defineAppSearchVarFn({ searchText });
      query({
        variables,
      });
    }),
    [],
  );

  // update suggestion once data recevied from DB
  const suggestions = !data ? prevSuggestions.current : [].concat(data?.suggestions ?? []);
  prevSuggestions.current = suggestions;

  return (
    <Search
      data={suggestions}
      onSearchClick={fetchSearchValue}
      onSuggestionChange={fetchSuggestionValue}
    />
  );
};

export const AppSearch = memo(AppSearchComp);
