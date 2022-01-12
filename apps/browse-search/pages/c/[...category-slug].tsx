import React, { FC, useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Product } from '@jade/ui/organism/types';
import { Filter } from '@jade/ui/molecules/types';
import ProductListing from '../../components/templates/ProductListing';
import PLPContextProvider, { PLPContext } from '../../stores/plp/Context';
import { setInitialState } from '../../stores/plp/actions';
import { initializeApollo } from '@jade/graphql-client';
import { QUERY_PRODUCT_LIST, categoryPageVars } from '../../graphql/queries';
import sortConfig from '../../config/sort.config.json';
import { parseInString, parseAsInteger } from '@jade/utils';

type Props = {
  products: Product[];
  filters: Filter[];
  pagination: {
    totalPages: number;
    selectedPage: number;
  };
};

const PLP: FC<Props> = ({ products, filters, pagination }) => {
  const { dispatch } = useContext(PLPContext);

  useEffect(() => {
    if (products) {
      setInitialState(products, filters, dispatch);
    }
  }, [products]);

  return <ProductListing sortOptions={sortConfig} pagination={pagination} />;
};

export const PLPPage: NextPage<Props> = ({ products, filters, pagination }) => {
  return (
    <PLPContextProvider>
      <PLP products={products} filters={filters} pagination={pagination} />
    </PLPContextProvider>
  );
};

PLPPage.getInitialProps = async ({ query }) => {
  const {
    'category-slug': categoryPath,
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

  const cid = categoryPath[categoryPath.length - 1];

  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
    query: QUERY_PRODUCT_LIST,
    variables: categoryPageVars({
      listCategory: parseInString(cid),
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
    pagination: responseData?.pagination,
  };
};

export default PLPPage;
