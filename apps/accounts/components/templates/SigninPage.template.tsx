import React from 'react';
import { Col, Container, Row } from '@jade/ui/atoms';
import { Heading } from '@jade/ui/atoms';
import SiginContainer from '../organisms/SiginContainer';
import { LabelContext } from '../../stores/labelContext';

const SiginPage = () => {
  return (
    <Container>
      <Row mb="lg" withGutter={true}>
        <Col>
          <LabelContext.Consumer>
            {value => <Heading tagName="h1">{value.signinHeading}</Heading>}
          </LabelContext.Consumer>
          <SiginContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default SiginPage;
