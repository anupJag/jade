import React from 'react';
import { Layout } from '@jade/ui/templates';
import { Container, Row } from '@jade/ui/atoms';

/* eslint-disable-next-line */
export interface CheckoutProps {}

export const Checkout = (props: CheckoutProps) => {
  return (
    <Layout>
      <Container>
        <Row>
          <h1>Welcome to Checkout Page!</h1>
        </Row>
      </Container>
    </Layout>
  );
};

export default Checkout;
