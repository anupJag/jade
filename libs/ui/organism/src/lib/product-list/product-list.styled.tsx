import { styled } from '@jade/ui/themes';
import { grid } from '@jade/ui/utils';

const { container } = grid;
export const PLContainer = styled.div`
  ${container(false)}
`;
export const PLRow = styled.ul`
  list-style-type: none;
  .slick-arrow {
    width: ${props => props.theme.space[12]};
    height: ${props => props.theme.space[12]};
    z-index: ${props => props.theme.zIndices.banner};
    border-radius: ${props => props.theme.radii.full};
    background: ${props => props.theme.themeColors.secondaryColor[200]};
    transition: 0.2s linear box-shadow;
  }
  .slick-arrow:focus,
  .slick-arrow:hover,
  .slick-arrow:active {
    box-shadow: 0 0 0 4px rgba(0, 83, 159, 0.4);
  }
`;
export const PLCol = styled.li``;
