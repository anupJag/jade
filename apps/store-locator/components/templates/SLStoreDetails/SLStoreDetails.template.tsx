import React, { FC } from 'react';
import {} from './SLStoreDetails.styled';
import { MdLocationOn } from 'react-icons/md';

import { Container, Row, Heading, Box, Grid } from '@jade/ui/atoms';
import { LabelContext } from '../../../stores/LabelContext';

// Components
import { StoreBasicDetails } from '../../molecules/StoreBasicDetails';
import { StoreTiming } from '../../molecules/StoreTiming';
import { StoreImage } from '../../molecules/StoreImage';
import { removeKeyFromJson } from '@jade/utils';

interface IProps {
  storeData: any;
}

const SLStoreDetails: FC<IProps> = ({ storeData }: IProps) => {
  const formattedData = removeKeyFromJson([storeData]);
  const store = formattedData && formattedData.length > 0 ? formattedData[0] : storeData;
  const basicDetails = [
    {
      icon: MdLocationOn,
      value: `${store.address.addressLine1}, 
        ${store.address.addressLine2}, 
        ${store.address.city}, 
        ${store.address.state}, 
        ${store.address.country}`
    },
    {
      icon: 'phone',
      value: store.contactNo
    },
    {
      icon: 'info',
      value: store.description
    }
  ];

  return (
      <Container>
        
        <Heading tagName="h1">{ store.name }</Heading>
       
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>

          <Box mt={16}>
            <StoreImage imageUrl={store.images[0]} imageSize="lg"/>
            <StoreBasicDetails basicDetails={ basicDetails }/>
          </Box>

          <Box mt={16}>
            <LabelContext.Consumer>
              {
                value => (
                  <>
                    <StoreTiming timing={ store.openHours } info={ store.openHourInfo } head={value.storeTimingLabel}/>
                  </>
                )
              }
            </LabelContext.Consumer>
            
          </Box>
        </Grid>
      </Container>
  );
};

export default SLStoreDetails;
