import React, { FC, useCallback } from 'react';
import { FaMapMarker } from 'react-icons/fa';

// Core
import { Box } from '@jade/ui/atoms';

interface IStoreTiming {
  openingTime: string;
  closingTime: string;
}

interface StoreOpenStatusProps {
  storeTiming: IStoreTiming;
  offset: string;
}

const getTimestampFromTiming = (date, timing): Number => {
  const [hours, mintues = '00'] = timing.split(':');

  const timestamp = date.setHours(hours);

  return new Date(timestamp).setMinutes(mintues);
};

const getCurrentTimestapOfCity = (offset): number => {
  let d = new Date();

  const utcTimestamp = d.getTime() + d.getTimezoneOffset() * 60000;

  return utcTimestamp + 3600000 * offset;
};

const isStoreOpen = (storeTiming, offset): Boolean => {
  const currentTimestamp = getCurrentTimestapOfCity(offset);

  const currentDate = new Date(currentTimestamp);
  const { openingTime, closingTime } = storeTiming;

  const openingTimestamp = getTimestampFromTiming(currentDate, openingTime);
  const closingTimestamp = getTimestampFromTiming(currentDate, closingTime);

  return closingTimestamp >= currentTimestamp && currentTimestamp >= openingTimestamp;
};

export const StoreOpenStatus: FC<StoreOpenStatusProps> = ({ storeTiming, offset }) => {
  const day = {
    0: 'sun',
    1: 'mon',
    2: 'tue',
    3: 'wed',
    4: 'thu',
    5: 'fri',
    6: 'sat',
  };

  const currentDay = new Date().getDay();

  const isOpen = isStoreOpen(storeTiming[day[currentDay]], offset);
  return (
    <Box
      as={FaMapMarker}
      size="32px"
      d="flex"
      color={isOpen ? 'green.500' : 'red.500'}
      mt={2}></Box>
  );
};
