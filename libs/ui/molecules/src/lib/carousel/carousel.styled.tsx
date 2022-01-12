import { IconButton } from '@jade/ui/atoms';
import { styled } from '@jade/ui/themes';

export const Slider = styled.section`
  overflow: auto;
  width: 100%;
  position: relative;

  ${props => props.theme.mediaQueries.md} {
    overflow: hidden;
  }
`;

export const Track = styled.ul<{
  slideCount: number;
  slidesToShow: number;
  currentSlide: number;
}>`
  display: flex;
  list-style-type: none;
  position: relative;
  width: ${props => `${props.slideCount * 100}%`};

  ${props => props.theme.mediaQueries.md} {
    left: -${props => (props.currentSlide / props.slidesToShow) * 100}%;
    transition: left 600ms;
    width: ${props => (props.slideCount / props.slidesToShow) * 100}%;
  }
`;

export const StyledSlide = styled.li`
  flex-basis: 0;
  flex-grow: 1;
  overflow: hidden;
`;

export const StyledIconButton = styled(IconButton)<{ variation?: string }>`
  box-shadow: 1px 1px 1px #dedede;
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  ${props =>
    props.variation === 'next'
      ? `
      right: 0;
      `
      : `
      left: 0;
    `}

  ${props => props.theme.mediaQueries.md} {
    display: block;
  }

  ${props => props.theme.themeColors.cta.primary};
`;

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

export default StyledIconButton;
