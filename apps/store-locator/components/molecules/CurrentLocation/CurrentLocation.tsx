import React, { FC } from 'react';

// Core
import { Heading, Box, Button, Icon } from '@jade/ui/atoms';
import { TiLocationOutline } from 'react-icons/ti';

interface CurrentLocationProps {}
/**
 * Component : Search
 *
 * A search component which contains autocomplete and search icon
 *
 * @param {CurrentLocationProps} {
 * }
 * @returns
 */
export const CurrentLocation: FC<CurrentLocationProps> = () => {
  // const classes = useStyles();

  return (
    <div>
      <Box d="flex" justifyContent="center" mb="8">
        <Icon as={TiLocationOutline} aria-hidden="true" />
      </Box>

      <Box d="flex" justifyContent="center" mb="8">
        <Heading tagName="h5">Current Location</Heading>
      </Box>

      <Box d="flex" justifyContent="center">
        <Button variantColor="orange" variant="solid" width="50%">
          Find stores near me
        </Button>
      </Box>
    </div>
  );
};
