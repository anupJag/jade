import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ButtonBase from '@material-ui/core/ButtonBase';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useStyles } from './auto-complete.styled';

interface AutocompleteProps {
  data: any[];
  onSuggestionChange: (suggestionText: string) => void;
  onSearchClick: (value: any) => void;
  placeholder?: string;
}

/**
 * filter configuration :
 *
 */
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  trim: true,
});

const noop = () => true;

/**
 * Component : Autocomplete
 *
 * Customized auto complete component
 *
 * @param {AutocompleteProps} {
 *   data = [],
 *   onSuggestionChange = args => {},
 *   onSearchClick = args => {},
 * }
 * @returns
 */
export const AutoComplete: FC<AutocompleteProps> = ({
  data = [],
  onSuggestionChange = noop,
  onSearchClick = noop,
  placeholder = 'Search on store',
}: AutocompleteProps) => {
  const classes = useStyles();

  // useState : suggestions from props {data} will be stored
  const [suggestion, setSuggestion] = React.useState([]);

  // useState : onEnter / onClick of suggestions will updated here
  const [searchValue, setSearchValue] = React.useState(null);

  // useState : on change of input value will be updated here
  const [inputValue, setInputValue] = React.useState(null);

  // set suggestion
  useEffect(() => {
    setSuggestion(data);
  }, [data]);

  // Pass entered value to parent via callback
  useEffect(() => {
    onSearchClick(searchValue);
  }, [searchValue]);

  // Pass suggestion to parent via callback
  useEffect(() => {
    if (inputValue) onSuggestionChange(inputValue);
    else setSuggestion([]);
  }, [inputValue]);

  return (
    <Autocomplete
      id="search"
      freeSolo
      fullWidth
      autoComplete
      disableClearable
      disableListWrap
      clearOnEscape
      value={searchValue}
      options={suggestion}
      forcePopupIcon={false}
      filterOptions={filterOptions}
      classes={{ listbox: classes.listBox }}
      getOptionLabel={option => (typeof option === 'string' ? option : option.title)}
      onChange={(e, selctedValue) => setSearchValue(selctedValue)}
      onInputChange={(event: any, newInputValue: any) =>
        event?.type === 'change' && setInputValue(newInputValue)
      }
      renderInput={params => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            disableUnderline: false,
            className: classes.input,
          }}
          inputProps={{
            'aria-label': placeholder,
            ...params.inputProps,
          }}
          placeholder={placeholder}
          fullWidth
        />
      )}
      renderOption={option => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);
        return (
          <Grid container alignItems="center">
            <Hidden xsDown>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt={option.images[0].altText}
                    src={option.images[0].url}
                  />
                </ButtonBase>
              </Grid>
            </Hidden>
            <Grid item xs>
              <Typography variant="body2" color="textPrimary">
                {parts.map((part, index) => (
                  <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                    {part.text}
                  </span>
                ))}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
};
