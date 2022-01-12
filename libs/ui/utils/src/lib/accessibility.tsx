import { css } from '@emotion/core';

export const srOnly = () => css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const srOnlyFocusable = () => css`
  &:active,
  &:focus {
    clip: auto;
    height: auto;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`;
