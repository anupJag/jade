import React, { FC, useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { CategoryTile } from '@jade/ui/organism/types';
import CategoryListing from '../../components/templates/CategoryListing';
import CLPContextProvider, { CLPContext } from '../../stores/clp/Context';
import { setInitialState } from '../../stores/clp/actions';
import { initializeApollo } from '@jade/graphql-client';
import { QUERY_SUB_CATEGORY } from '@jade/graphql-client';

type Props = {
  categories: CategoryTile[];
};

const CLP: FC<Props> = ({ categories }) => {
  const { dispatch } = useContext(CLPContext);

  useEffect(() => {
    if (categories) {
      setInitialState(categories, dispatch);
    }
  }, [categories]);

  return <CategoryListing />;
};

export const CLPPage: NextPage<Props> = ({ categories }) => {
  return (
    <CLPContextProvider>
      <CLP categories={categories} />
    </CLPContextProvider>
  );
};

CLPPage.getInitialProps = async ({ query }) => {
  const id = query['clp-slug'];

  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
    query: QUERY_SUB_CATEGORY,
    variables: { id },
  });

  const responseData = res?.data?.categories;

  return { categories: responseData };
};

export default CLPPage;
