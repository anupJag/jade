import { styled } from '@jade/ui/themes';

export const StoreTimingWrapper = styled.div`
  background-color: ${props => props.theme.themeColors.background.descriptiveArea[500]};
  border: ${props => props.theme.themeBorders.tileOutline}
  padding: ${props => props.theme.space[3]};

`;

export const TimingWrapper = styled.div``;

export const TimingInfo = styled.div`
  padding-bottom: ${props => props.theme.space[3]};
`;

export const TimingRow = styled.div`
  padding: ${props => props.theme.space[3]};
  border-bottom: 1px solid ${props => props.theme.colors.gray[400]};
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
`;

export const OpenStatusIcon = styled.div`
  margin-bottom: ${props => props.theme.space[3]};
  text-align: center;
`;
