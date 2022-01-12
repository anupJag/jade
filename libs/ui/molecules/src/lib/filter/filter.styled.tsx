import { styled } from '@jade/ui/themes';
import { Checkbox } from '@jade/ui/atoms';

export const StyledCheckbox = styled(Checkbox)`
  div {
    border: 1px solid #000;
  }
  div + div {
    border: 0;
  }
`;

export const StyledFilterContainer = styled('ul')`
  list-style-type: none;
`;

export const FilterItem = styled('li')`
  padding: 0 ${props => props.theme.space.xs} ${props => props.theme.space.xxs}
    ${props => props.theme.space.xs};
  &.active {
    color: green;
    font-weight: ${props => props.theme.themeFontWeights.bold};
  }
  a {
    font-size: 14px;
    &:hover {
      color: green;
    }
  }
`;

export const FilterBlock = styled('li')`
  margin-bottom: ${props => props.theme.space.xs};
`;

export const FilterHeading = styled('h6')`
  font-size: 14px;
  font-weight: ${props => props.theme.themeFontWeights.bold};
`;
