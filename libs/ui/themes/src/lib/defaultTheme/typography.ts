import { css } from '@emotion/core';

export const themeFonts = {
  body: () =>
    css`
      font-family: Rubik, Helvetica, Arial, sans-serif;
    `,
  heading: () =>
    css`
      font-family: Rubik, Helvetica, Arial, sans-serif;
    `,
};

// Using 1.200 - minor third type scale - refer: https://type-scale.com/
export const themFontSizes = {
  hero: '2.986rem',
  h1: '2.488rem',
  h2: '2.074rem',
  h3: '1.728rem',
  h4: '1.44rem',
  h5: '1.2rem',
  h6: '1.2rem',
  body: '1rem',
  legal: '0.833rem',
};
export const themeFontWeights = {
  bold: 700,
  medium: 500,
  normal: 400,
  light: 300,
};
