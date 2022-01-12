import { theme } from '@chakra-ui/core';

export const sizes = {
  ...theme.sizes,
  full: '100%',
  half: '50%',
  none: 0,
  xs: '14rem',
  sm: '20rem',
  md: '28rem',
  lg: '32rem',
  xl: '48rem',
  xxl: '64rem',
};
/*
Viewport Sizes
| <- 512 -> | <- 768 -> | <- 992 -> | <- 1280 -> |
*/
export const breakpoints = ['32em', '48em', '62em', '80em'];

export const mediaQueries = {
  xs: ``,
  sm: `@media (min-width: ${breakpoints[0]})`,
  md: `@media (min-width: ${breakpoints[1]})`,
  lg: `@media (min-width: ${breakpoints[2]})`,
  xl: `@media (min-width: ${breakpoints[3]})`,
};
