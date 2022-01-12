import { css } from '@emotion/core';
import { defaultTheme } from '@jade/ui/themes';

const { mediaQueries } = defaultTheme;

type ViewPorts = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const hideEverywhere = () => css`
  display: none;
`;

export const hideOn = (resolution: ViewPorts) => css`
  ${mediaQueries[resolution]} {
    display: none;
  }
`;

export const showEverywhere = () => css`
  display: block;
`;

export const showOn = (resolution: ViewPorts) => css`
  ${mediaQueries[resolution]} {
    display: block;
  }
`;
