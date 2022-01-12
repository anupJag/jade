import { styled } from '@jade/ui/themes';

export const h1 = styled.h1`
  ${props => props.theme.themeFonts.heading}
  font-size: ${props => props.theme.themFontSizes.h1};
  font-weight: ${props => props.theme.themeFontWeights.bold}
`;
export const h2 = styled.h2`
  ${props => props.theme.themeFonts.heading}
  font-size: ${props => props.theme.themFontSizes.h2};
  font-weight: ${props => props.theme.themeFontWeights.light}
`;
export const h3 = styled.h3`
  ${props => props.theme.themeFonts.heading}
  font-size: ${props => props.theme.themFontSizes.h3};
  font-weight: ${props => props.theme.themeFontWeights.light}
`;
export const h4 = styled.h4`
  ${props => props.theme.themeFonts.heading}
  font-size: ${props => props.theme.themFontSizes.h4};
  font-weight: ${props => props.theme.themeFontWeights.light}
`;
export const h5 = styled.h5`
  ${props => props.theme.themeFonts.heading}
  font-size: ${props => props.theme.themFontSizes.h5};
  font-weight: ${props => props.theme.themeFontWeights.light}
`;
export const h6 = styled.h6`
  ${props => props.theme.themeFonts.heading}
  font-size: ${props => props.theme.themFontSizes.h6};
  font-weight: ${props => props.theme.themeFontWeights.light}
`;
