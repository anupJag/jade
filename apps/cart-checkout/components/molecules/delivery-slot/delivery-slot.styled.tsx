import { Grid, Flex, Box } from '@jade/ui/atoms';
import { styled } from '@jade/ui/themes';

export const DeliverSlotHeading = styled(Box)`
  margin: 0.75rem 0;

  ${props => props.theme.mediaQueries.sm} {
    display: flex;
    align-items: center;
  }
`;

export const SelectedSlotLabel = styled(Flex)`
  align-items: center;
  margin-left: 0;
  font-size: ${props => props.theme.themFontSizes.h5};

  ${props => props.theme.mediaQueries.sm} {
    margin-left: 1rem;
  }
`;

export const WeekDaysContainer = styled(Grid)`
  grid-gap: 0.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  ${props => props.theme.mediaQueries.lg} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

export const DayContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${props => props.theme.themeColors.neutralColor[500]};
  border-color: ${props => props.theme.themeColors.neutralColor[500]};
  border-width: 0.125rem;
  font-size: 1.25rem;
  font-weight: ${props => props.theme.themeFontWeights.medium};
  padding: 1rem 0;
  cursor: pointer;

  &.active,
  &:hover {
    background-color: ${props => props.theme.themeColors.primaryColor[400]};
    border-color: ${props => props.theme.themeColors.primaryColor[400]};
    color: ${props => props.theme.themeColors.neutralColor[100]};
    box-shadow: 0 0 0 3px ${props => props.theme.themeColors.neutralColor[100]} inset;
  }

  &.disabled {
    border-style: dashed;
    opacity: 0.5;
    cursor: default;

    &:hover {
      color: ${props => props.theme.themeColors.neutralColor[500]};
      background-color: ${props => props.theme.themeColors.neutralColor[100]};
      border-color: ${props => props.theme.themeColors.neutralColor[500]};
      opacity: 0.5;
      box-shadow: none;
    }
  }
`;

export const DeliverSlotsContainer = styled(Grid)`
  grid-gap: 0.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

export const DeliverySlots = styled(Flex)`
  align-items: center;
  color: ${props => props.theme.themeColors.neutralColor[500]};
  border-color: ${props => props.theme.themeColors.neutralColor[500]};
  border-width: 0.0625rem;
  font-size: 1rem;
  font-weight: ${props => props.theme.themeFontWeights.medium};
  padding: 1rem;
  cursor: pointer;

  &.active {
    color: ${props => props.theme.themeColors.primaryColor[400]};
    border-color: ${props => props.theme.themeColors.primaryColor[400]};
    box-shadow: 0 0 0 0.0625rem ${props => props.theme.themeColors.primaryColor[400]} inset;
  }

  &:hover {
    color: ${props => props.theme.themeColors.primaryColor[400]};
    border-color: ${props => props.theme.themeColors.primaryColor[400]};
    box-shadow: 0 0 0 0.0625rem ${props => props.theme.themeColors.primaryColor[400]} inset;
  }

  &.disabled {
    border-style: dashed;
    opacity: 0.5;
    cursor: default;
    border-width: 0.125rem;

    &:hover {
      color: ${props => props.theme.themeColors.neutralColor[500]};
      border-color: ${props => props.theme.themeColors.neutralColor[500]};
      opacity: 0.5;
      box-shadow: none;
    }
  }
`;
