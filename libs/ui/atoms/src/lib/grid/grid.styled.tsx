import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';
import { Box } from '@jade/ui/atoms';

export const Container = styled(Box)<{ isFluid?: boolean; withGutter?: boolean }>`
  ${props =>
    props.isFluid ? grid.containerFluid(props.withGutter) : grid.container(props.withGutter)}
`;

export const Row = styled(Box)<{ withGutter?: boolean }>`
  ${props => grid.row(props.withGutter)}
`;

export const Col = styled(Box)<{ columns?: grid.ColumnsCount; auto?: boolean }>`
  ${props => (props.columns ? grid.colWithCount(props.columns) : grid.col(props.auto))}
`;
