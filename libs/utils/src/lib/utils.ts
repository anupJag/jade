import {
  Filter as FilterType,
  FilterRange,
  KeyValueFilterRange,
  StartEndFilterRange,
  ValueFilterRange,
} from './types';

export function utils(): string {
  return 'utils';
}

export function toTitleCase(str: string) {
  var result = str.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export const splitRoutePath = router => {
  return router.split('?')[0];
};

export const getPageType = router => {
  return router.asPath.split('/')[1];
};

export const convertQueryObjectToString = query => {
  var queryStrArr = [];
  for (let key in query) {
    queryStrArr.push(`${key}=${encodeURIComponent(query[key])}`);
  }
  return queryStrArr.join('&');
};

export const removeSlugQuery = (router, slugName) => {
  const filteredRouterQuery = {};
  for (let key in router.query) {
    if (key !== slugName) {
      filteredRouterQuery[key] = router.query[key];
    }
  }
  return filteredRouterQuery;
};

/**
 * @description: This method is responsible to render the label with some prefix
 * @param filter
 * @param range
 */
export const renderFiltersLabel = (filter: FilterType, range: FilterRange) => {
  switch (filter.key) {
    case 'price':
      return getLabel('$' as string, range as StartEndFilterRange);
    case 'discount':
      return getLabel('%' as string, range as StartEndFilterRange);
    case 'reviewCount':
      return getLabel('' as string, range as StartEndFilterRange);
    case 'category':
      return toTitleCase((range as KeyValueFilterRange).label);
    case 'shippingTags':
      return (range as KeyValueFilterRange).label;
    default:
      return (range as ValueFilterRange).value;
  }
};

/**
 * @description rendering labels
 * @param prefix it's type of string
 * @param param1 [start, end]
 */
export const getLabel = (prefix: string, { start, end }: StartEndFilterRange) => {
  if (start === '*') {
    return toTitleCase(`less than ${prefix}${end}`);
  } else if (end === '*') {
    return toTitleCase(`more than ${prefix}${start}`);
  } else {
    return `${prefix}${start} - ${prefix}${end}`;
  }
};

/**
 * @description function is responsible to convert string or string or array into string only
 * @param str
 */
export const parseInString = (str: string | string[]) => {
  return Array.isArray(str) ? str.join('') : str;
};

/**
 * @description function is responsible to convert string or string or array into Number only
 * @param str
 */
export const parseAsInteger = (str: string | string[]) => {
  return Array.isArray(str) ? parseInt(str.join('')) : parseInt(str);
};

/**
 * @description function is responsible to split comma seprated string into array
 * @param queryName
 */
export const splitStringToArray = (queryName: string | string[]) => {
  return parseInString(queryName || '').split(',');
};
export const formatUrl = (str: string, char = '-') => {
  return str.toLowerCase().split(" ").join(char);
}

export const removeKeyFromJson = (data: any, key = '__typename') => {
  const arr = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const { address, openHours, location } = element;
    delete location[key];
    delete address[key];
    delete openHours[key];
    delete element[key];
    arr.push(element);
  }
  return arr;
}
