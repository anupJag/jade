import themeColors from './colors';
import * as typography from './typography';
import * as space from './space';
import * as sizes from './sizes';
import * as borders from './borders';
import { theme } from '@chakra-ui/core';

export const defaultTheme = {
  ...theme,
  ...typography,
  ...space,
  ...sizes,
  ...borders,
  themeColors,
};

export type DefaultThemeType = typeof defaultTheme;
