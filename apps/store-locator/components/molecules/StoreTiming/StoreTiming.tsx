import React, { FC, useCallback } from 'react';

import {
  StoreTimingWrapper,
  TimingWrapper,
  TimingRow,
  TimingInfo,
  OpenStatusIcon,
} from './StoreTiming.style';

import { Container, Row, Col, Grid, Box, Link, Button, Heading, Text } from '@jade/ui/atoms';

// Need to replace with core
import { Icon } from '@chakra-ui/core';

interface ILocation {
  latitude: number;
  longitude: number;
}

interface IOpenHours {
  mon: String;
  tue: String;
  wed: String;
  thu: String;
  fri: String;
  sat: String;
  sun: String;
}

interface IStore {
  id: number;
  name: String;
  address: String;
  country: String;
  postal_code: String;
  location: ILocation;
  open_hours: IOpenHours;
  openHourInfo: String;
}

interface StoreTimingProps {
  timing: any;
  info?: string;
  head: string;
}

export const StoreTiming: FC<StoreTimingProps> = ({ timing, info, head }) => {
  return (
    <StoreTimingWrapper>
      <OpenStatusIcon>{/* <Icon name="InfoIcon" size="82px" color="red.500" /> */}</OpenStatusIcon>

      <TimingWrapper>
        <Heading tagName="h4">
          <Text fontWeight="bold"> {head} </Text>
        </Heading>
        {Object.keys(timing).map((key, i) => (
          <TimingRow key={i}>
            <Box d="flex" justifyContent="space-between">
              <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              <span>
                {timing[key].openingTime} - {timing[key].closingTime}
              </span>
            </Box>
          </TimingRow>
        ))}
      </TimingWrapper>

      <TimingInfo>{info}</TimingInfo>
    </StoreTimingWrapper>
  );
};
