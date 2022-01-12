import React from 'react';
import { css, Global } from '@emotion/core';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          background: #ffffff;
          color: #000000;
          font-family: Rubik, Helvetica, Arial, sans-serif;
          font-size: 100%;
          line-height: 1.5;
          font-weight: 400;
        }
        [role='button'] {
          cursor: pointer;
        }
        a:focus,
        button:focus {
          outline: 1px dashed #0050b3;
          outline-offset: 4px;
        }
      `}
    />
  );
};

export default GlobalStyles;
