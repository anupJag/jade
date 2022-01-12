import React, { FC, useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Product } from '@jade/ui/organism/types';
import { Filter } from '@jade/ui/molecules/types';
import ProductListing from '../../components/templates/ProductListing';
import PLPContextProvider, { PLPContext } from '../../stores/plp/Context';
import { setInitialState } from '../../stores/plp/actions';
import { initializeApollo } from '@jade/graphql-client';
import { QUERY_SEARCH_RESULT, searchPageVars } from '../../graphql/queries';
import sortConfig from '../../config/sort.config.json';
import { parseInString, parseAsInteger } from '@jade/utils';

type Props = {
  products: Product[];
  filters: Filter[];
  searchText: string;
  pagination: any;
};

const SRP: FC<Props> = ({ products, filters, searchText, pagination }) => {
  const { dispatch } = useContext(PLPContext);

  useEffect(() => {
    if (products) {
      setInitialState(products, filters, dispatch);
    }
  }, [products]);

  return (
    <ProductListing searchText={searchText} pagination={pagination} sortOptions={sortConfig} />
  );
};

export const SRPPage: NextPage<Props> = ({ products, filters, searchText, pagination }) => {
  return (
    <PLPContextProvider>
      <SRP products={products} filters={filters} searchText={searchText} pagination={pagination} />
    </PLPContextProvider>
  );
};

SRPPage.getInitialProps = async ({ query }) => {
  const {
    pageNo,
    sortAs,
    sort,
    price,
    rating,
    brands,
    deliveryType,
    discount,
    reviewCount,
  } = query;
  const searchText = query['search-slug'] as string;

  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
    query: QUERY_SEARCH_RESULT,
    variables: searchPageVars({
      searchText,
      page: parseAsInteger(pageNo) || 1,
      sortStyle: parseAsInteger(sort) || 1,
      sortType: parseInString(sortAs),
      priceRange: parseInString(price),
      rating: parseInString(rating),
      brands: parseInString(brands),
      deliveryType: parseInString(deliveryType),
      discount: parseInString(discount),
      reviewCount: parseInString(reviewCount),
    }),
  });

  const responseData = res?.data?.getFacets;

  return {
    products: responseData?.products,
    filters: responseData?.filters,
    searchText,
    pagination: responseData?.pagination,
  };
};

export default SRPPage;
