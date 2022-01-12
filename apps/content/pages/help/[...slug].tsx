import React, { FC, useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Head } from '@jade/ui/molecules';
import { Layout } from '@jade/ui/templates';
import HelpContent from '../../components/templates/Help';
import HelpContextProvider, { HelpContext } from '../../stores/help/Context';
import { setInitialState } from '../../stores/help/actions';
import { initializeApollo, initializeContentfulApollo } from '@jade/graphql-client';

import {
  QUERY_PAGE_LAYOUT,
  contentLayoutVars,
  getDynamicQuery,
  STATIC_PAGE_FIELDS,
} from '../../queries';

const getPageLayout = async () => {
  const apolloClient = initializeApollo();
  /**
   * Query : Page layout
   */
  const { data } = await apolloClient.query({
    query: QUERY_PAGE_LAYOUT,
    variables: contentLayoutVars,
    fetchPolicy: 'network-only',
  });
  return data;
};

const getComponentProps = async (moduleName, moduleID, fields) => {
  const apolloClientContentful = initializeContentfulApollo();
  /**
   * Query : Page layout
   */

  const { data } = await apolloClientContentful.query({
    query: getDynamicQuery(moduleName, moduleID, fields),
    fetchPolicy: 'network-only',
  });
  return data;
};

export type SlotData = {
  moduleName: string;
  data: [];
};

type Props = {
  slotData: SlotData[];
};

const Help: FC<Props> = props => {
  const { slotData } = props;
  const { dispatch } = useContext(HelpContext);
  useEffect(() => {
    if (slotData) {
      setInitialState(slotData, dispatch);
    }
  }, [slotData]);
  return <HelpContent {...props} />;
};

export const HelpPage: NextPage<Props> = props => {
  return (
    <Layout>
      <HelpContextProvider>
        <Head title="Jade | Help" description={'Help page'} keywords={'Help'} />
        <Help {...props} />
      </HelpContextProvider>
    </Layout>
  );
};

HelpPage.getInitialProps = async ({ query }) => {
  const { slug } = query;

  const allLayouts = await getPageLayout();

  const { pageLayout = [] } = allLayouts;

  const currentLayout = pageLayout.find(page => page.slug == slug);
  const data = (currentLayout && currentLayout.layout) || {};
  const { slots = [] } = data;

  const slotsDataPromises = slots.map(async slot => {
    const { moduleName } = slot;
    const componentProps = await getComponentProps(
      moduleName,
      slot.contentId,
      STATIC_PAGE_FIELDS[moduleName],
    );
    componentProps.moduleName = moduleName;
    return componentProps;
  });
  const slotData = [];

  const slotsData = await Promise.all(slotsDataPromises).then();

  slotsData.map(slots => {
    slotData.push(slots);
  });

  return {
    slotData,
  };
};

export default HelpPage;
