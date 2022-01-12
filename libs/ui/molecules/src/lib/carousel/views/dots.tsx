import React, { FC } from 'react';
import { Flex } from '@jade/ui/atoms';
// TODO: fix DotsProps
import { DotsProps } from '../../index';
import { DotControl, StyledDot, StyledDotsContainer } from './dots.styled';

export const Dots: FC<DotsProps> = ({ slideCount, onSlideClick }) => {
  const dotsArray = Array.from(new Array(slideCount));
  return (
    <StyledDotsContainer>
      <Flex as="ul">
        {dotsArray.map((key, index) => {
          return (
            <StyledDot key={`dot_${index}`}>
              <DotControl
                onClick={() => onSlideClick(index)}
                aria-label={`item ${index + 1} of ${slideCount}`}>
                {' '}
              </DotControl>
            </StyledDot>
          );
        })}
      </Flex>
    </StyledDotsContainer>
  );
};
