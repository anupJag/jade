import { styled } from '@jade/ui/themes';

export const Head = styled.div`
  text-align: left;
`;

export const StoreName = styled.div`
  border: ${props => props.theme.themeBorders.tileOutline};
  height: ${props => props.theme.space[5]};
`;

export const BodyWrapper = styled.div`
  padding-top: ${props => props.theme.space[3]};
`;

export const TimingWrapper = styled.div``;

export const TimingInfo = styled.div``;

export const TimingRow = styled.div`
  padding: ${props => props.theme.space[3]};
  border-bottom: 1px solid ${props => props.theme.colors.gray[400]};
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
`;

export const CapitalizedSpan = styled.span`
  text-transform: capitalize;
`;
