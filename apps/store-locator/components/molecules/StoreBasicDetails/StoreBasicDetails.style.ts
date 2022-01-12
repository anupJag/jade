import { styled } from '@jade/ui/themes';

export const DetailsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  align-items: center;
  padding: ${props => props.theme.space[3]} ${props => props.theme.space[2]};
  border-bottom: ${props => props.theme.themeBorders.tileOutline};
`;

export const DetailsCol = styled.div``;

export const IconData = styled.div`
  background-color: ${props => props.theme.themeColors.primaryColor[400]};
  border-radius: 50%;
  width: ${props => props.theme.space[10]};
  height: ${props => props.theme.space[10]};
  color: ${props => props.theme.themeColors.neutralColor[100]};
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
`;
