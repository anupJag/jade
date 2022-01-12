import React, { FC } from 'react';
import { Box } from '@jade/ui/atoms';
import RegisterForm from '../../molecules/RegisterForm/RegisterForm';

type RegisterContainerProps = {};

const RegisterContainer: FC<RegisterContainerProps> = ({}) => {
  return (
    <Box justifyContent="center" d="flex" my={1} p={10} textAlign="left">
      <RegisterForm />
    </Box>
  );
};

export default RegisterContainer;
