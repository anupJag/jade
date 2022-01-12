import React, { FC, useState } from 'react';
import getConfig from 'next/config';
import { useForm } from 'react-hook-form';
import Recaptcha from 'react-recaptcha';

import {
  Alert,
  AlertIcon,
  AlertDescription,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Grid,
  InputGroup,
  InputRightElement,
  Icon,
  Tooltip,
  CircularProgress,
} from '@jade/ui/atoms';
import { StyledSup } from './RegisterForm.styled';

import { LabelContext } from '../../../stores/labelContext';

import { emailRegex, phoneRegex, passwordRegex, nameRegex } from '@jade/utils';
import { useRegisterUser } from '../../../hooks/register';

type RegisterFormProps = {};

const RegisterForm: FC<RegisterFormProps> = () => {
  const { register, handleSubmit, errors, reset, watch } = useForm();
  const [captchaError, setCaptchaError] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);

  const resetForm = () => {
    setCaptchaError('');
    reset();
  };

  const { registerFn, error, loading } = useRegisterUser(resetForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const { publicRuntimeConfig } = getConfig();
  const { CAPTCHA_SITE_KEY } = publicRuntimeConfig;

  const onFormSubmit = async data => {
    if (!captchaToken) {
      setCaptchaError('Captcha not validated');
      return;
    }
    registerFn(data);
  };
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleCPasswordVisibility = () => setShowCPassword(!showCPassword);

  return (
    <LabelContext.Consumer>
      {labelState => {
        return (
          <form noValidate onSubmit={handleSubmit(onFormSubmit)}>
            {error && (
              <Box>
                <Alert status="error">
                  <AlertIcon />
                  <AlertDescription>
                    {error.graphQLErrors[0]
                      ? error.graphQLErrors[0].message
                      : labelState.registerGraphQLGenericError}
                  </AlertDescription>
                </Alert>
              </Box>
            )}
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <FormControl mb={3} isInvalid={errors.firstName?.message?.length > 0}>
                <FormLabel htmlFor="firstName">
                  {labelState.registerFirstNameField}
                  <StyledSup>*</StyledSup>
                </FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  maxLength={15}
                  placeholder={labelState.registerFirstNameField}
                  ref={register({
                    required: labelState.registerFirstNameRequiredValidation,
                    pattern: {
                      value: nameRegex,
                      message: labelState.registerFirstNameFormatValidation,
                    },
                  })}
                />
                <FormErrorMessage aria-live="assertive">
                  {errors.firstName?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb={3} isInvalid={errors.lastName?.message?.length > 0}>
                <FormLabel htmlFor="lastName">
                  {labelState.registerLastNameField}
                  <StyledSup>*</StyledSup>
                </FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  maxLength={15}
                  placeholder={labelState.registerLastNameField}
                  ref={register({
                    required: labelState.registerLastNameRequiredValidation,
                    pattern: {
                      value: nameRegex,
                      message: labelState.registerLastNameFormatValidation,
                    },
                  })}
                />
                <FormErrorMessage aria-live="assertive">
                  {errors.lastName?.message}
                </FormErrorMessage>
              </FormControl>
            </Grid>

            <FormControl mb={6} isInvalid={errors.email?.message?.length > 0}>
              <FormLabel htmlFor="email">
                {labelState.registerEmailField}
                <StyledSup>*</StyledSup>
              </FormLabel>
              <Input
                name="email"
                id="email"
                placeholder={labelState.registerEmailField}
                type="email"
                ref={register({
                  required: labelState.registerEmailRequiredValidation,
                  pattern: {
                    value: emailRegex,
                    message: labelState.registerEmailFormatValidation,
                  },
                })}
              />
              <FormErrorMessage aria-live="assertive">{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mb={6} isInvalid={errors.phoneNumber?.message?.length > 0}>
              <FormLabel htmlFor="phoneNumber">
                {labelState.registerPhoneField}
                <StyledSup>*</StyledSup>
              </FormLabel>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder={labelState.registerPhoneField}
                ref={register({
                  required: labelState.registerPhoneRequiredValidation,
                  pattern: {
                    value: phoneRegex,
                    message: labelState.registerPhoneFormatValidation,
                  },
                })}
              />
              <FormErrorMessage aria-live="assertive">
                {errors.phoneNumber?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mb={6} isInvalid={errors.password?.message?.length > 0}>
              <FormLabel htmlFor="password">
                {labelState.registerPasswordField}
                <StyledSup>*</StyledSup>
                <Tooltip
                  hasArrow
                  aria-label={labelState.registerPasswordFormatInfo}
                  label={labelState.registerPasswordFormatInfo}
                  placement="right">
                  <Icon name="info" />
                </Tooltip>
              </FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder={labelState.registerPasswordField}
                  ref={register({
                    required: labelState.registerPasswordRequiredValidation,
                    pattern: {
                      value: passwordRegex,
                      message: labelState.registerPasswordFormatValidation,
                    },
                  })}
                />
                <InputRightElement width="3rem">
                  <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                    {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage aria-live="assertive">{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <FormControl mb={6} isInvalid={errors.cpassword?.message?.length > 0}>
              <FormLabel htmlFor="cpassword">
                {labelState.registerConfirmPasswordField}
                <StyledSup>*</StyledSup>
              </FormLabel>
              <InputGroup>
                <Input
                  id="cpassword"
                  type={showCPassword ? 'text' : 'password'}
                  name="cpassword"
                  placeholder={labelState.registerConfirmPasswordField}
                  ref={register({
                    validate: value =>
                      value === watch('password') ||
                      labelState.registerConfirmPasswordMatchValidation,
                  })}
                />
                <InputRightElement width="3rem">
                  <Button h="1.5rem" size="sm" onClick={handleCPasswordVisibility}>
                    {showCPassword ? <Icon name="view-off" /> : <Icon name="view" />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage aria-live="assertive">{errors.cpassword?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mb={6} isInvalid={captchaError.length > 0}>
              <Recaptcha
                sitekey={CAPTCHA_SITE_KEY}
                render="explicit"
                verifyCallback={setCaptchaToken}
                onloadCallback={() => {}}
              />
              <FormErrorMessage aria-live="assertive">{captchaError}</FormErrorMessage>
            </FormControl>

            <Box>
              <Button w="100%" mt={4} variantColor="green" type="submit" variant="solid">
                {loading ? (
                  <CircularProgress size="md" isIndeterminate color="green" />
                ) : (
                  labelState.registerSubmit
                )}
              </Button>
            </Box>
          </form>
        );
      }}
    </LabelContext.Consumer>
  );
};

export default RegisterForm;
