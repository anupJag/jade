import React from 'react';
import { NextPage } from 'next';
import { initializeApollo, PRODUCT_DETAIL_QUERY } from '@jade/graphql-client';
import { ProductDetail } from '../../components/templates/ProductDetail';

export const PDPPage: NextPage<{ product: any }> = ({ product }) => {
  if (product) {
    return <ProductDetail product={product} />;
  }

  return <p>Product Not Found</p>;
};

PDPPage.getInitialProps = async ({ query }) => {
  const pid = query['product-slug'];
  const apolloClient = initializeApollo();

  let response = await apolloClient.query({
    query: PRODUCT_DETAIL_QUERY,
    variables: {
      input: pid,
    },
  });

  const product = response?.data?.fetchProductBySku || null;

  return { product };
};

export default PDPPage;
