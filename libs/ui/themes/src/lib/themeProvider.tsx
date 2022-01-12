import { ThemeContext } from '@emotion/core';
import React, { useContext } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { defaultTheme, DefaultThemeType } from './defaultTheme';

type ThemeProviderProps = {
  theme: DefaultThemeType;
  children: React.ReactElement | React.ReactElement[];
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: defaultTheme,
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (Object.keys(theme).length === 0) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};
