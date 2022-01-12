import { css } from '@emotion/core';
import { defaultTheme } from '@jade/ui/themes';

const { mediaQueries } = defaultTheme;

export type HalfColumnsCount = 1 | 2 | 3 | 4 | 5 | 6;
export type ColumnsCount = HalfColumnsCount | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnOrder = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type OffsetCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

const GRID_GUTTER = 30;
const GRID_GUTTER_COL_IMPACT = GRID_GUTTER / 2;
const GRID_GUTTER_COL_IMPACT_WITH_UNIT = `${GRID_GUTTER_COL_IMPACT}px`;
const GRID_GUTTER_COL_NEG_IMPACT_WITH_UNIT = `-${GRID_GUTTER_COL_IMPACT}px`;
const GRID_COUNT = 12;

const _calculateEvenColumnWidth = (cols: ColumnsCount) => parseFloat((100 / cols).toFixed(6));
const _calculateColumnWidth = (cols: ColumnsCount | OffsetCount) =>
  parseFloat(((cols * 100) / GRID_COUNT).toFixed(6));

export const containerFluid = (useGutter = true) => css`
  width: 100%;
  padding-right: ${useGutter ? GRID_GUTTER_COL_IMPACT_WITH_UNIT : 0};
  padding-left: ${useGutter ? GRID_GUTTER_COL_IMPACT_WITH_UNIT : 0};
  margin-right: auto;
  margin-left: auto;
`;

export const container = (useGutter = true) => css`
  ${containerFluid(useGutter)}
  ${mediaQueries.sm} {
    max-width: 488px;
  }
  ${mediaQueries.md} {
    max-width: 720px;
  }
  ${mediaQueries.lg} {
    max-width: 960px;
  }
  ${mediaQueries.xl} {
    max-width: 1044px;
  }
`;

export const row = (useGutter = true) => css`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${useGutter ? GRID_GUTTER_COL_NEG_IMPACT_WITH_UNIT : 0};
  margin-left: ${useGutter ? GRID_GUTTER_COL_NEG_IMPACT_WITH_UNIT : 0};
`;

export const rowEvenCols = (colsCount: HalfColumnsCount, useGutter = true) => css`
  ${row(useGutter)}
  & > * {
    flex: 0 0 ${_calculateEvenColumnWidth(colsCount)}%;
    max-width: ${_calculateEvenColumnWidth(colsCount)}%;
  }
`;

export const col = (auto = true) => css`
  position: relative;
  width: 100%;
  padding-right: ${GRID_GUTTER_COL_IMPACT_WITH_UNIT};
  padding-left: ${GRID_GUTTER_COL_IMPACT_WITH_UNIT};
  ${auto
    ? `
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  `
    : null}
`;

export const colWithCount = (columns: ColumnsCount) => css`
  position: relative;
  width: 100%;
  padding-right: ${GRID_GUTTER_COL_IMPACT_WITH_UNIT};
  padding-left: ${GRID_GUTTER_COL_IMPACT_WITH_UNIT};
  flex: 0 0 ${_calculateColumnWidth(columns)}%;
  max-width: ${_calculateColumnWidth(columns)}%;
`;

export const colOrder = (columnOrder: ColumnOrder) => css`
  order: ${columnOrder};
`;

export const colOrderFirst = () => css`
  order: -1;
`;

export const colOrderLast = () => css`
  order: ${GRID_COUNT + 1};
`;

export const offset = (columns: OffsetCount) => css`
  margin-left: ${_calculateColumnWidth(columns)}%;
`;
