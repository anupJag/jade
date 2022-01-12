/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { HyperLink } from '@jade/ui/atoms';

import { LabelContext } from '../../../stores/labelContext';
import {
  Alert,
  AlertIcon,
  AlertDescription,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  InputGroup,
  InputRightElement,
  Icon,
  Box,
} from '@jade/ui/atoms';
import { loginVars } from '@jade/graphql-client';
import { MarginBottom, StyledSpan, StyledSup } from './SigninForm.styled';
import { useLoginUser } from '../../../hooks/login';

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm();
  const { login, loginErr, loading } = useLoginUser(reset);

  const onSubmit = data => {
    login({ variables: loginVars(data) });
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <LabelContext.Consumer>
      {value => {
        if (!value) {
          //TODO: discuss failure handling way
          value = {};
        }
        return (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {loginErr && (
              <Box mb={2}>
                <MarginBottom>
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>
                      {loginErr.graphQLErrors[0]
                        ? loginErr.graphQLErrors[0].message
                        : 'Something went wrong please try again later.'}
                    </AlertDescription>
                  </Alert>
                </MarginBottom>
              </Box>
            )}
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">
                {value.signinEmail}
                <StyledSup>*</StyledSup>
              </FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. name@example.com"
                size="md"
                ref={register({
                  required: value.signinEmailReqError,
                })}
              />
              <FormErrorMessage aria-live="assertive">
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={6} isInvalid={errors.password}>
              <FormLabel htmlFor="password">
                {value.signinPassword}
                <StyledSup>*</StyledSup>
              </FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="*******"
                  size="md"
                  ref={register({
                    required: value.signinPasswordReqError,
                  })}
                />
                <InputRightElement width="3rem">
                  <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                    {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
            <Box w="100%" pt={4} pb={2}>
              <HyperLink href="#" type="PrimaryNav" title="Forgot Password" hasSubnav={false}>
                {value.signinForgotPassword}?
              </HyperLink>
            </Box>
            <Box w="100%" pb={4}>
              <StyledSpan>{value.newMember}?</StyledSpan>
              <HyperLink href="/register" type="PrimaryNav" title="Register" hasSubnav={false}>
                {value.registerHeading}
              </HyperLink>
            </Box>

            <Button type="submit" variantColor="green" variant="solid" width="100%">
              {loading ? (
                <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                value.signinCTAText
              )}
            </Button>
          </form>
        );
      }}
    </LabelContext.Consumer>
  );
}
