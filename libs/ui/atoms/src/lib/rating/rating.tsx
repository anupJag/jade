import React, { FC } from 'react';
import { Box, Icon } from '@jade/ui/atoms';

type Props = {
  rating: {
    value: number;
    count: number;
  }
}

export const Rating: FC<Props> = ({ rating }) => {
  const { value, count } = rating
  return (
    <Box d="flex">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <Icon name="star" key={i} color={i < value ? 'yellow.500' : 'gray.300'}/>
        ))}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        ({count})
      </Box>
    </Box>
  );
};

export default Rating;
