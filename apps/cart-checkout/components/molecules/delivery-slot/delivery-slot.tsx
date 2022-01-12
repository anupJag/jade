import React, { FC } from 'react';
import { Text, Icon, Box } from '@jade/ui/atoms';
import { useTheme } from '@jade/ui/themes';
import {
  DeliverSlotHeading,
  SelectedSlotLabel,
  WeekDaysContainer,
  DayContainer,
  DeliverSlotsContainer,
  DeliverySlots,
} from './delivery-slot.styled';
import { DeliveryDayInfo } from './delivery-slot.type';

type Props = {
  selectedSlot: any;
  slotsInfo: Array<any>;
  deliveryDaysInfo: Array<DeliveryDayInfo>;
  onSlotSelection: (selectedSlot: any) => void;
  onSlotDaySelection: (selectedDate: DeliveryDayInfo) => void;
};

export const DeliverySlot: FC<Props> = ({
  selectedSlot,
  slotsInfo,
  deliveryDaysInfo,
  onSlotSelection,
  onSlotDaySelection,
}) => {
  const theme: any = useTheme();

  const onDaySelection = (item: DeliveryDayInfo) => {
    onSlotDaySelection(item);
  };

  const onDaySlotSelection = (item: any) => {
    onSlotSelection(item);
  };

  return (
    <Box data-testid="delivery-slot-wrapper">
      <DeliverSlotHeading>
        <Text fontSize="1.5rem" mb={1}>
          Delivery slot -{' '}
        </Text>
        <SelectedSlotLabel>
          <Icon name="time"></Icon>
          <Text as="i" ml={2} fontSize="1rem">
            {selectedSlot.weekDay}, {selectedSlot.dayMonth} {selectedSlot.value}
          </Text>
        </SelectedSlotLabel>
      </DeliverSlotHeading>
      <Box my={4}>
        <WeekDaysContainer>
          {deliveryDaysInfo.map(item => (
            <DayContainer
              className={`${item.isSelected ? 'active' : ''}${item.isDisabled ? ' disabled' : ''}`}
              key={item.date}
              onClick={() => {
                onDaySelection(item);
              }}>
              <Text>{item.weekDay}</Text>
              <Text>{item.dayMonth}</Text>
            </DayContainer>
          ))}
        </WeekDaysContainer>
        <Text my={2} fontSize={theme.themFontSizes.h5}>
          Select a delivery slot
        </Text>
        <DeliverSlotsContainer>
          {slotsInfo.map(item => (
            <DeliverySlots
              className={`${item.isSelected ? 'active' : ''}${item.isDisabled ? ' disabled' : ''}`}
              key={item.key}
              onClick={() => {
                onDaySlotSelection(item);
              }}>
              <Text>{item.value}</Text>
            </DeliverySlots>
          ))}
        </DeliverSlotsContainer>
      </Box>
    </Box>
  );
};
