import React from 'react';
import { Layout } from '@jade/ui/templates';
import { Container } from '@jade/ui/atoms';

import SLSearch from '../components/templates/SLSearch';

// import StoreLocator from './store-locator';

export const StoreLocator = () => {
  return (
    <Layout>
      <Container>
        <SLSearch />
      </Container>
    </Layout>
  );
};

export default StoreLocator;
