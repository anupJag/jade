import React from 'react';
import { Alert as AlertComponent, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/core';


export const Alert = ({ title, description, status, variant }) => {
  return (
    <AlertComponent
      status={status}
      variant={variant}
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon size="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        {description}
      </AlertDescription>
    </AlertComponent>
  );
};

export default Alert;
