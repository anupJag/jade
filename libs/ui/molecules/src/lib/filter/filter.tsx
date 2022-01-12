import React, { FunctionComponent, useState } from 'react';
import { Box, Icon, Link } from '@jade/ui/atoms';
import {
  StyledCheckbox,
  FilterItem,
  StyledFilterContainer,
  FilterBlock,
  FilterHeading,
} from './filter.styled';
import {
  Filter as FilterType,
  StartEndFilterRange,
  KeyValueFilterRange,
  FilterRange,
} from './filter.type';
import {
  renderFiltersLabel,
  splitRoutePath,
  convertQueryObjectToString,
  removeSlugQuery,
  getPageType,
  splitStringToArray,
} from '@jade/utils';
import { NextRouter, useRouter } from 'next/router';
import { SLUG_TYPES } from '@jade/ui/utils';

type Props = {
  filter: FilterType;
};

/**
 * @description Filter component
 * @param param0 expecting filters and onChange method
 */
export const FilterComponent: FunctionComponent<Props> = ({ filter }) => {
  const router = useRouter();
  const [selectedMultiOptions, setSelectedMultiOptions] = useState<Array<string>>([]);
  // TODO: This component needs refactoring (including store)

  const pageTypePathName: string = `${router.asPath.split('?')[0]}`;
  let pageSlugString: string = SLUG_TYPES[pageTypePathName.split('/')[1]];
  const filteredRouterQuery = removeSlugQuery(router as NextRouter, pageSlugString);
  const pageType: string = getPageType(router as NextRouter);
  const slugRouteTemplate: string =
    pageTypePathName.split('/')[1] === 'c'
      ? `/${pageType}/[...${pageSlugString}]`
      : `/${pageType}/[${pageSlugString}]`;

  const isOptionsChecked = (filter: FilterType, range: FilterRange, queryName: string): boolean => {
    return splitStringToArray(router.query[queryName]).includes(renderFiltersLabel(filter, range));
  };

  const getHrefAndAsHref = (optionsValue: string[], queryName: string) => {
    const optionQueryTemplateObject = {
      query: { ...filteredRouterQuery, [queryName]: [...new Set(optionsValue)].join(',') },
    };
    const brandHref = { pathname: slugRouteTemplate, ...optionQueryTemplateObject };
    const brandAsHref = { pathname: pageTypePathName, ...optionQueryTemplateObject };
    return { brandHref, brandAsHref };
  };

  const onMultiSelectHandler = (event: React.FormEvent, value: string, queryName: string) => {
    const onloadURLQueries = splitStringToArray(router.query[queryName]);
    if ((event.target as HTMLInputElement).checked) {
      const addedOptions = [...selectedMultiOptions, value, ...onloadURLQueries].filter(
        item => item,
      );
      setSelectedMultiOptions([...new Set(addedOptions)]);
      const { brandHref, brandAsHref } = getHrefAndAsHref(addedOptions, queryName);
      router.push(brandHref, brandAsHref);
    } else {
      const optionToRemove = selectedMultiOptions.indexOf(value);
      selectedMultiOptions.splice(optionToRemove, 1);
      const { brandHref, brandAsHref } = getHrefAndAsHref(selectedMultiOptions, queryName);
      router.push(brandHref, brandAsHref);
      setSelectedMultiOptions([...selectedMultiOptions]);
    }
  };

  const renderFilterItems = (
    filter: FilterType,
    index: number,
    range: FilterRange,
  ): JSX.Element => {
    /**
     * Rendering Category filter as link and handling query params
     */
    if (filter.key === 'category') {
      let pathName = `/${pageType}/${(range as KeyValueFilterRange).value}`;
      let categoryRoute = { pathname: pathName, query: { ...filteredRouterQuery } };
      return (
        <FilterItem
          key={`${filter.key}-${index}`}
          className={splitRoutePath(router.asPath) === categoryRoute.pathname ? 'active' : ''}>
          <Icon name="chevron-right" size="12px" />{' '}
          <Link
            as={categoryRoute}
            href={{
              pathname: slugRouteTemplate,
              query: { ...filteredRouterQuery },
            }}>
            <a>{renderFiltersLabel(filter, range)}</a>
          </Link>
        </FilterItem>
      );
    }

    /**
     * Rendering Price filter as link and handling query params
     */
    if (filter.key === 'price') {
      let priceQueryTemplateObject = {
        query: {
          ...filteredRouterQuery,
          price: `${(range as StartEndFilterRange).start},${(range as StartEndFilterRange).end}`,
        },
      };
      let priceRoute = { pathname: pageTypePathName, ...priceQueryTemplateObject };
      const queryStr = convertQueryObjectToString(priceRoute.query);
      const reqUrl = `${priceRoute.pathname}?${queryStr}`;
      return (
        <FilterItem
          key={`${filter.key}-${index}`}
          className={router.asPath == reqUrl ? 'active' : ''}>
          <Icon name="chevron-right" size="12px" />{' '}
          <Link
            as={priceRoute}
            href={{
              pathname: slugRouteTemplate,
              ...priceQueryTemplateObject,
            }}>
            <a> {renderFiltersLabel(filter, range)} </a>
          </Link>
        </FilterItem>
      );
    }

    /**
     * Rendering Price filter as link and handling query params
     */
    if (filter.key === 'rating') {
      const ratingQueryTemplateObject = {
        query: {
          ...filteredRouterQuery,
          rating: `${(range as KeyValueFilterRange).value}`,
        },
      };
      let ratingRoute = { pathname: pageTypePathName, ...ratingQueryTemplateObject };
      const queryStr = convertQueryObjectToString(ratingRoute.query);
      const reqUrl = `${ratingRoute.pathname}?${queryStr}`;
      return (
        <FilterItem
          key={`${filter.key}-${index}`}
          className={router.asPath == reqUrl ? 'active' : ''}>
          <Icon name="chevron-right" size="12px" />{' '}
          <Link
            as={ratingRoute}
            href={{
              pathname: slugRouteTemplate,
              ...ratingQueryTemplateObject,
            }}>
            <a> {renderFiltersLabel(filter, range)} </a>
          </Link>
        </FilterItem>
      );
    }

    /**
     * Rendering Brands filter as link and handling query params
     */
    if (filter.key === 'brand') {
      return (
        <FilterItem key={`${filter.key}-${index}`}>
          <StyledCheckbox
            isChecked={isOptionsChecked(filter, range, 'brands')}
            variantColor="green"
            name={`${filter.key}`}
            onChange={(event: React.FormEvent) =>
              onMultiSelectHandler(event, (range as KeyValueFilterRange).value, 'brands')
            }>
            <Box as="span" fontSize="14px">
              {renderFiltersLabel(filter, range)}
            </Box>
          </StyledCheckbox>
        </FilterItem>
      );
    }

    /**
     * Rendering Brands filter as link and handling query params
     */
    if (filter.key === 'shippingTags') {
      return (
        <FilterItem key={`${filter.key}-${index}`}>
          <StyledCheckbox
            isChecked={isOptionsChecked(filter, range, 'deliveryType')}
            variantColor="green"
            name={`${filter.key}`}
            onChange={(event: React.FormEvent) =>
              onMultiSelectHandler(event, (range as KeyValueFilterRange).value, 'deliveryType')
            }>
            <Box as="span" fontSize="14px">
              {renderFiltersLabel(filter, range)}
            </Box>
          </StyledCheckbox>
        </FilterItem>
      );
    }

    /**
     * Rendering Discount filter as link and handling query params
     */
    if (filter.key === 'discount') {
      let discountQueryTemplateObject = {
        query: {
          ...filteredRouterQuery,
          discount: `${(range as StartEndFilterRange).start},${(range as StartEndFilterRange).end}`,
        },
      };
      let discountRoute = { pathname: pageTypePathName, ...discountQueryTemplateObject };
      const queryStr = convertQueryObjectToString(discountRoute.query);
      const reqUrl = `${discountRoute.pathname}?${queryStr}`;
      return (
        <FilterItem
          key={`${filter.key}-${index}`}
          className={router.asPath == reqUrl ? 'active' : ''}>
          <Icon name="chevron-right" size="12px" />{' '}
          <Link
            as={discountRoute}
            href={{
              pathname: slugRouteTemplate,
              ...discountQueryTemplateObject,
            }}>
            <a> {renderFiltersLabel(filter, range)} </a>
          </Link>
        </FilterItem>
      );
    }

    /**
     * Rendering Discount filter as link and handling query params
     */
    if (filter.key === 'reviewCount') {
      let reviewCountQueryTemplateObject = {
        query: {
          ...filteredRouterQuery,
          reviewCount: `${(range as StartEndFilterRange).start},${
            (range as StartEndFilterRange).end
          }`,
        },
      };
      let reviewCountRoute = { pathname: pageTypePathName, ...reviewCountQueryTemplateObject };
      const queryStr = convertQueryObjectToString(reviewCountRoute.query);
      const reqUrl = `${reviewCountRoute.pathname}?${queryStr}`;
      return (
        <FilterItem
          key={`${filter.key}-${index}`}
          className={router.asPath == reqUrl ? 'active' : ''}>
          <Icon name="chevron-right" size="12px" />{' '}
          <Link
            as={reviewCountRoute}
            href={{
              pathname: slugRouteTemplate,
              ...reviewCountQueryTemplateObject,
            }}>
            <a> {renderFiltersLabel(filter, range)} </a>
          </Link>
        </FilterItem>
      );
    }
  };

  return (
    <FilterBlock>
      <FilterHeading>{filter.displayName}</FilterHeading>
      <StyledFilterContainer>
        {filter.range.map((range, index) => renderFilterItems(filter, index, range))}
      </StyledFilterContainer>
    </FilterBlock>
  );
};
