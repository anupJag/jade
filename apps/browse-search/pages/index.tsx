import React, { FC, useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import { OptimizelyExperiment } from '@jade/ui/abtests';
import { Context as GlobalContext, updateAppUser } from '@jade/store';
import { Layout } from '@jade/ui/templates';
import { Head } from '@jade/ui/molecules';

import HomePageA from '../components/templates/HomePageA.template';
import HomePageB from '../components/templates/HomePageB.template';

import { initializeApollo } from '@jade/graphql-client';
import { MUTATE_ADD_PRODUCTS, addProductVarsFn, QUERY_PRODUCTS } from '../graphql/queries';

import {
  HOME_PAGE_QUERY,
  homePageVars,
  // MUTATE_REGISTER_USER,
  // userVarsFn,
} from '@jade/graphql-client';

import { generateProducts } from '@jade/utils';

type ExperimentProps = {
  pageInfo: any;
  userInfo: any;
  products: any;
  error?: any;
};

/**
 * Component : ExperimentComponent
 *
 * Root component of Application. which is responsible for Dynamic Home page
 *
 * @param {*} { pageInfo, userInfo, products }
 * @returns
 */
const ExperimentComponent = ({ pageInfo, userInfo, products }: ExperimentProps) => {
  const {
    pageMetadata: { pageTitle: title, pageDescription: description, pageKeywords: keywords },
    templateAImage,
    templateBImage,
    categoryImageSection,
  } = pageInfo || {};

  // const { dispatch } = useContext(GlobalContext);

  /* useEffect(() => {
    // Update User Details to Global State, then it can be accessable all over the page
    updateAppUser({ user: userInfo?.registerUser }, dispatch);
  }, []);
 */
  return (
    <Layout>
      <Head title={title} description={description} keywords={keywords} />
      <OptimizelyExperiment experiment="home_page_variation">
        {variation => {
          return variation === 'A' ? (
            <HomePageA data={{ categoryImageSection, heroImage: templateAImage }} />
          ) : (
            <HomePageB data={{ categoryImageSection, heroImage: templateBImage, products }} />
          );
        }}
      </OptimizelyExperiment>
    </Layout>
  );
};

ExperimentComponent.getInitialProps = async () => {
  const apolloClient = initializeApollo();

  /**
   * Query : HOME PAGE DETAILS
   *
   * querying page information like { template, metadata, categoryImageSection}
   *
   */
  const { data: pageInfo } = await apolloClient.query({
    query: HOME_PAGE_QUERY,
    variables: homePageVars,
  });

  /**
   * Query : PRODUCT DETAILS
   *
   * querying list of products from DB
   *
   */
  const {
    data: { products },
  } = await apolloClient.query({
    query: QUERY_PRODUCTS,
  });

  /**
   * TODO : DELELE!
   * FLAG : DEV PURPOSE { it should be removed once products features are created }
   *
   * Workaround to insert products from JSON file to DB if products not available in DB
   * It will push at app initail load.
   */
  const addProductsApi = async () => {
    const filteredProducts = await generateProducts();
    const addProductAsync = filteredProducts.map((product: any) => {
      return apolloClient.mutate({
        mutation: MUTATE_ADD_PRODUCTS,
        variables: addProductVarsFn({
          ...product,
        }),
      });
    });
    return Promise.all(addProductAsync);
  };
  if (!products?.length) await addProductsApi();

  /**
   * TODO : DELETE!
   * FLAG : DEV PURPOSE { it should be removed once user features are created }
   *
   * Workaround to insert user to DB if none of the user available in DB
   */
  /* const { data: userInfo } = await apolloClient.mutate({
    mutation: MUTATE_REGISTER_USER,
    variables: userVarsFn({
      title: 'Mr',
      name: 'Jack',
      email: 'jack@gmail.com',
      phoneNumber: '987654321',
      password: 'xt12345',
    }),
  }); */

  return {
    props: {
      pageInfo,
      // userInfo,
      products,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default ExperimentComponent;
