import React from 'react';
import { Layout } from '@jade/ui/templates';
import { Container, Row } from '@jade/ui/atoms';

export const Index = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <h1>Welcome to Accounts Page!</h1>
        </Row>
      </Container>
    </Layout>
  );
};

export default Index;
