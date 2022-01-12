import React, { FC } from 'react';
import { Layout } from '@jade/ui/templates';
import { Container } from '@jade/ui/atoms';
import CategoryList from '../../organisms/CategoryList/CategoryList';

const CategoryListing: FC = () => {
  return (
    <Layout>
      <Container>
        <CategoryList />
      </Container>
    </Layout>
  );
};

export default CategoryListing;
