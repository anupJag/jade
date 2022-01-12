import { styled } from '@jade/ui/themes';

export const StyledDotsContainer = styled.div`
  display: none;
  justify-content: space-around;

  ${props => props.theme.mediaQueries.md} {
    display: flex;
  }
`;

export const StyledDot = styled.li`
  list-style-type: none;
`;

export const DotControl = styled.button`
  border: 1px solid #d3d3d3;
  width: 10px;
  height: 10px;
  min-width: 10px;
  padding: 0;
  border-radius: 5px;
  margin: 0 10px;

  ${props => props.theme.themeColors.cta.primary};
`;
