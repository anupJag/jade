import React, { FC, useCallback } from 'react';
import { FaMapMarker } from 'react-icons/fa';

import { DetailsRow, DetailsCol, IconData } from './StoreBasicDetails.style';

import { Box } from '@jade/ui/atoms';

// Need to replace with core
import { Icon } from '@chakra-ui/core';

interface IDetail {
  icon: string;
  value: string;
}

interface StoreBasicDetailsProps {
  basicDetails: any[];
}

const renderIcon = icon => {
  if (typeof icon === 'string') {
    return <Icon name={icon} aria-hidden="true" />;
  } else {
    return <Box as={FaMapMarker} size="16px" d="flex" color="white"></Box>;
  }
};

export const StoreBasicDetails: FC<StoreBasicDetailsProps> = ({ basicDetails }) => {
  return (
    <Box mt={5}>
      {basicDetails.map((ele, index) => (
        <DetailsRow key={index}>
          <DetailsCol>
            <IconData>{renderIcon(ele.icon)}</IconData>
          </DetailsCol>

          <DetailsCol>{ele.value}</DetailsCol>
        </DetailsRow>
      ))}
    </Box>
  );
};
