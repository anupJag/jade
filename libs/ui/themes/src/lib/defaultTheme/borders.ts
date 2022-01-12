import { css } from '@emotion/core';
import * as C from './colorTokens';

export const themeBorders = {
  highlightedLinksOutline: () =>
    css`
      outline: 1px dashed ${C.neutralColor[100]};
    `,
  tileOutline: `1px solid ${C.neutralColor[300]};`,
  navigationOutline: `1px solid ${C.neutralColor[200]}`,
};
