import React, { FC } from 'react';

import {
  Head,
  BodyWrapper,
  TimingWrapper,
  TimingRow,
  TimingInfo,
  CapitalizedSpan,
} from './StoreList.style';
import { LabelContext } from '../../../stores/LabelContext';

// Core
import { Heading, Box, Button, Icon, Link, Grid, Text } from '@jade/ui/atoms';
import { Accordionn } from '@jade/ui/molecules';

import { formatUrl, removeKeyFromJson } from '@jade/utils';
// Molecules
import { StoreImage } from '../StoreImage';

// Atoms
import { StoreOpenStatus } from '../../atoms/StoreOpenStatus';

interface StoreListProps {
  data: any[];
}

/**
 * Component : Search
 *
 * A search component which contains autocomplete and search icon
 *
 * @param {SearchByPlaceProps} {
 *   data = [],
 * }
 * @returns
 */
export const StoreList: FC<StoreListProps> = ({
  data = [],
}: StoreListProps) => {
  const formattedData = removeKeyFromJson(data);
  return (
    <>
      {
        formattedData.map((store, i) => 
        <Accordionn
          key={ i }
          title={
            <Title 
              storeName={ store.name }
              storeAddr={ store.address }
              storeTiming={ store.openHours }
              offset={ store.timezone }
            />}
            body={
              <Body 
                timings={ store.openHours }
                storeId={ store.id }
                storeName={formatUrl(store.name)}
                thumbnailImage={ store.thumbnailImage }
              />
            }></Accordionn>)
      }
    </>
  );
};

export const Title = ({ storeName, storeAddr, storeTiming, offset }) => {
  return (
    <Head>
      <Grid templateColumns="1fr 8fr">
        <div>
          <StoreOpenStatus storeTiming={storeTiming} offset={offset} />
        </div>

        <Box>
          <Heading tagName="h5">
            <Text color="orange" fontWeight="bold">
              {storeName}
            </Text>
          </Heading>
          <p>{storeAddr.addressLine1}</p>
          <p>{storeAddr.addressLine2}</p>
        </Box>
      </Grid>
    </Head>
  );
};

export const Body = ({ timings, storeId, storeName, thumbnailImage }) => {
  return (
    <BodyWrapper>
      <Grid templateColumns="1fr 2fr">
        <TimingInfo>
          {/* <Icon name="InfoIcon" size="82px" color="red.500" /> */}
          <StoreImage imageUrl={thumbnailImage} imageSize="sm" />
        </TimingInfo>

        <TimingWrapper>
          {Object.keys(timings).map((key, i) => (
            <TimingRow key={i}>
              <Box d="flex" justifyContent="space-between">
                <CapitalizedSpan>{key.charAt(0) + key.slice(1)}</CapitalizedSpan>
                <span>
                  {timings[key].openingTime} - {timings[key].closingTime}
                </span>
              </Box>
            </TimingRow>
          ))}
        </TimingWrapper>
      </Grid>

      <Link href={`/store-locator/${storeName}/${storeId}`}>
        <Button variantColor="orange" variant="solid" width="100%">
          <LabelContext.Consumer>
            {value => <span>{value.slStoreDetailBtnLabel}</span>}
          </LabelContext.Consumer>
          <Icon name="chevron-right" aria-hidden="true" />
        </Button>
      </Link>
    </BodyWrapper>
  );
};
