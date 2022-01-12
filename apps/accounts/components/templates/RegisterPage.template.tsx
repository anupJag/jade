import React, { FC } from 'react';
import { Col, Container, Row, Heading } from '@jade/ui/atoms';
import RegisterFormContainer from '../organisms/RegisterContainer';
import { LabelContext } from '../../stores/labelContext';

type RegisterPageProps = {};

const RegisterPage: FC<RegisterPageProps> = ({}) => {
  return (
    <Container>
      <Row mb="lg" withGutter={true}>
        <Col>
          <LabelContext.Consumer>
            {value => <Heading tagName="h1">{value.registerHeading}</Heading>}
          </LabelContext.Consumer>
          <RegisterFormContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
