import React, { FC, useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { AutoComplete } from '@jade/ui/molecules';
import { SearchHolder, useStyles } from './search.style';

interface SearchProps {
  data: any[];
  onSuggestionChange: (suggestionText: string) => void;
  onSearchClick: (value: any) => void;
}
/**
 * Component : Search
 *
 * A search component which contains autocomplete and search icon
 *
 * @param {SearchProps} {
 *   data = [],
 *   onSearchClick,
 *   onSuggestionChange,
 * }
 * @returns
 */
export const Search: FC<SearchProps> = ({
  data = [],
  onSearchClick,
  onSuggestionChange,
}: SearchProps) => {
  const classes = useStyles();

  let searchValues = '';

  /**
   * Callback :
   *  handling on click of search icon
   *
   */
  const handleClick = useCallback(() => {
    onSearchClick(searchValues);
  }, []);

  /**
   * Callback :
   *  To preserve suggestion value to use it on click of search icon
   *
   */
  const fetchSuggestion = useCallback(suggestion => {
    onSuggestionChange(suggestion);
    searchValues = suggestion;
  }, []);

  return (
    <>
      <SearchHolder className={classes.root}>
        <AutoComplete
          data={data}
          onSearchClick={onSearchClick}
          onSuggestionChange={fetchSuggestion}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={handleClick}>
          <SearchIcon />
        </IconButton>
      </SearchHolder>
    </>
  );
};
