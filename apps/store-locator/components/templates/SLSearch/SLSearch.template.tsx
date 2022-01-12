import React, { FC } from 'react';
import { LeftContent, RightContent, SearchContainer } from './SLSearch.template.styled';

import { Container, Row } from '@jade/ui/atoms';
import { Heading } from '@jade/ui/atoms';

// Components
import { CurrentLocation } from '../../molecules/CurrentLocation';
import { SearchByPlace } from '../../molecules/SearchByPlace';

const SLSearch: FC = () => {
  return (
    <Container>
      <Heading tagName="h1">Store locator</Heading>
      <Heading tagName="h5">Find store details, facilities and opening hours</Heading>

      <Row>
        <LeftContent>
          <SearchContainer>
            <CurrentLocation />
          </SearchContainer>
        </LeftContent>

        <RightContent>
          <SearchContainer>
            <SearchByPlace />
          </SearchContainer>
        </RightContent>
      </Row>
    </Container>
  );
};

export default SLSearch;
