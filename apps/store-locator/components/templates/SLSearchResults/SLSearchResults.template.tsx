import React, { FC } from 'react';
import { LeftContent, RightContent } from './SLSearchResults.styled';

import { LabelContext } from '../../../stores/LabelContext';

// Core
import { Container, Row } from '@jade/ui/atoms';
import { Heading } from '@jade/ui/atoms';

// Components
import { StoreList } from '../../molecules/StoreList';
import { StoreMap } from '@jade/ui/organism';

interface IProps {
  query: string | string[];
  storeList: any;
}

const SLSearchResults: FC<IProps> = ({ query, storeList }) => {
  const defaultCenter = {
    lat: 51.516077,
    lng: -0.111361,
  };

  const locations = [];
  storeList &&
    storeList.map(store => {
      locations.push({
        name: store.name,
        location: { lat: store.location.latitude, lng: store.location.longitude },
      });
    });

  return (
    <Container>
      <LabelContext.Consumer>
        {value => (
          <>
            <Heading tagName="h1">{value.slResultsHeading}</Heading>
            <Heading tagName="h5">{`${value.slResultsSubHeading1} ${storeList.length} ${value.slResultsSubHeading2} '${query}'`}</Heading>
          </>
        )}
      </LabelContext.Consumer>

      <Row>
        <LeftContent>
          <StoreList data={storeList} />
        </LeftContent>

        <RightContent>
          {storeList.length > 0 && <StoreMap defaultCenter={defaultCenter} locations={locations} />}
        </RightContent>
      </Row>
    </Container>
  );
};

export default SLSearchResults;
