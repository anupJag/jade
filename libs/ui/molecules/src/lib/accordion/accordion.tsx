import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Icon,
} from '@chakra-ui/core';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AccordionProps {}

const StyledAccordion = styled.div`
  color: pink;
`;

export const Accordionn = ({ title, body }) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <Icon size="12px" name={isExpanded ? 'minus' : 'add'} />
          </AccordionHeader>
          <AccordionPanel pb={4}>{body}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );

  return <Accordion allowToggle>{null}</Accordion>;
};
