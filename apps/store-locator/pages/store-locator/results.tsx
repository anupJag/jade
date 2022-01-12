import React, { FC } from 'react';
import { NextPage } from 'next';

import { LabelContext } from '../../stores/LabelContext';
import { initializeApollo } from '@jade/graphql-client';
import { QUERY_STORES, QUERY_STORES_BY_POSTALCODE } from '@jade/graphql-client';

// Core
import { Head } from '@jade/ui/molecules';
import { Layout } from '@jade/ui/templates';
import { Container } from '@jade/ui/atoms';

import SLSearchResults from '../../components/templates/SLSearchResults';
import { InMemoryCache } from 'apollo-cache-inmemory';

type Props = {
  query?: string | string[];
  storeList?: any[];
  pageInfo: any;
};

const defaultLabels = {
  slResultsHeading: 'Store locator',
  slResultsSubHeading1: 'Showing nearest',
  slResultsSubHeading2: 'resuts for',
  slStoreDetailBtnLabel: 'View store details',
};

const SLSR: FC<Props> = ({ query, storeList, pageInfo }) => {
  const {
    pageMetadata: { pageTitle: title, pageDescription: description, pageKeywords: keywords },
  } = pageInfo || {};
  const { storeLocatorAppLabelsCollection: labelCollection } = pageInfo || {};

  return (
    <Layout>
      <LabelContext.Provider value={labelCollection}>
        <Head title={title} description={description} keywords={keywords} />
        <SLSearchResults query={query} storeList={storeList} />
      </LabelContext.Provider>
    </Layout>
  );
};

export const SLSRPage: NextPage<Props> = ({ query, storeList, pageInfo }) => {
  return <SLSR query={query} storeList={storeList} pageInfo={pageInfo} />;
};

SLSRPage.getInitialProps = async ({ query }) => {
  console.log('result1', query);
  const { query: slug } = query;
  //TODO: Remove hardcoded mock data, platform team will provide endpoint to get page data
  const { data: pageInfo } = {
    data: {
      pageMetadata: {
        pageTitle: 'store locator',
        pageDescription: 'store locator page',
        pageKeywords: 'store, store-locator',
      },
      storeLocatorAppLabelsCollection: defaultLabels,
    },
  };
  // await apolloClient.query({
  //   query: STORELOCATOR_LIST_PAGE_QUERY,
  //   variables: storeLocatorListPageVars,
  // });

  // const data = storeList;
  // return { query: slug, storeList: data, pageInfo };
  return { query: slug, storeList: await fetchStoresBySlug(slug), pageInfo };
};

const fetchStoresBySlug: any = async slug => {
  const apolloClient = initializeApollo();
  /**
   * Query : STORE DETAILS
   *
   * querying list of store from DB
   *
   */
  const {
    data: { stores },
  } = await apolloClient.query({
    query: QUERY_STORES_BY_POSTALCODE,
    variables: { postalCode: slug },
  });

  return stores;
};

const fetchStores: any = async () => {
  const apolloClient = initializeApollo({
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
  /**
   * Query : STORE DETAILS
   *
   * querying list of store from DB
   *
   */
  const {
    data: { stores },
  } = await apolloClient.query({
    query: QUERY_STORES,
  });

  return stores;
};

export default SLSRPage;
