import React, { FC } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

import { useTheme } from '@jade/ui/themes';

import { NoSsr } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      border: 0,
    },
  }),
);

const steps = [
  {
    step: 0,
    label: 'Review basket',
    slug: 'review-basket',
  },
  {
    step: 1,
    label: 'Delivery options',
    slug: 'delivery-options',
  },
  {
    step: 2,
    label: 'Order Summary',
    slug: 'order-summary',
  },
  {
    step: 3,
    label: 'Payment options',
    slug: 'payment-options',
  },
  {
    step: 4,
    label: 'Order confirmation',
    slug: 'order-confirmation',
  },
];

const getActiveStep = (slug: string) => {
  const activeStep = steps.find(step => step.slug === slug);
  return activeStep?.step || 0;
};

type Props = {
  slug: string;
};

const CheckoutStepper: FC<Props> = ({ slug }) => {
  const activeStep = getActiveStep(slug);
  const theme: any = useTheme();
  const classes = useStyles();
  const muiTheme = createMuiTheme({
    overrides: {
      MuiStepIcon: {
        root: {
          '&$active': {
            color: theme.themeColors.primaryColor[400],
          },
          '&$completed': {
            color: theme.themeColors.primaryColor[400],
          },
        },
      },
    },
  });

  return (
    <NoSsr>
      <MuiThemeProvider theme={muiTheme}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(step => (
            <Step key={step.label}>
              <StepLabel
                StepIconProps={{
                  classes: { root: classes.root },
                }}>
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </MuiThemeProvider>
    </NoSsr>
  );
};

export default CheckoutStepper;
