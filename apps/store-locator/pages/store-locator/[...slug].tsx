import React, { FC } from 'react';
import { NextPage } from 'next';

import { LabelContext } from '../../stores/LabelContext';

// Core
import { Layout } from '@jade/ui/templates';
import { Container } from '@jade/ui/atoms';
import SLStoreDetails from '../../components/templates/SLStoreDetails';

import { initializeApollo } from '@jade/graphql-client';
import { QUERY_STORE_BY_ID } from '@jade/graphql-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

type Props = {
  data: any;
  pageInfo: any;
};

const defaultLabels = {
  storeTimingLabel: 'Opening Hours',
};

const SL: FC<Props> = ({ data, pageInfo }) => {
  const {
    pageMetadata: { pageTitle: title, pageDescription: description, pageKeywords: keywords },
  } = pageInfo || {};
  const { storeLocatorAppLabelsCollection: labelCollection } = pageInfo || {};

  return (
    <Layout>
      <LabelContext.Provider value={labelCollection}>
        <Container>
          <SLStoreDetails storeData={data} />
        </Container>
      </LabelContext.Provider>
    </Layout>
  );
};

export const SLPage: NextPage<Props> = ({ data, pageInfo }) => {
  return <SL data={data} pageInfo={pageInfo} />;
};

SLPage.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const [name, id] = slug;

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

  const storeData = await fetchStoreById(id);
  return { data: storeData, pageInfo };
};

const fetchStoreById: any = async slug => {
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
    data: { store },
  } = await apolloClient.query({
    query: QUERY_STORE_BY_ID,
    variables: { storeId: slug },
  });

  return store;
};

export default SLPage;
