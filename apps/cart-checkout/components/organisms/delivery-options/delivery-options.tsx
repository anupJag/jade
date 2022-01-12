import React, { FC, useState, useContext } from 'react';
import { Box, Text, Flex, PseudoBox, Container } from '@jade/ui/atoms';
import { useTheme } from '@jade/ui/themes';
import { DeliverySlot, DeliveryDayInfo } from '../../molecules/delivery-slot';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import {
  QUERY_ALL_SLOTS_INFO_AND_LATEST_SLOT,
  QUERY_SLOTS_BY_DATERANGE,
} from 'apps/cart-checkout/graphql-client/queries';
import { AddressOptions } from '../../molecules/address-options/address-options';
import Card from '../../atoms/card/card';
import { CartPageContext } from 'apps/cart-checkout/pages/cart/[...slug]';
import Router from 'next/router';

const DeliveryOptions: FC<any> = () => {
  const theme: any = useTheme();

  const { updateContext, appliedPromotion, addressSelected, slotSelected } = useContext(
    CartPageContext,
  );

  console.log({ appliedPromotion, addressSelected, slotSelected });

  const slotDateRangeLimit = 6;
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const [slotsInfo, setSlotsInfo] = useState([]);
  const [deliveryDaysInfo, setDeliveryDaysInfo] = useState<Array<DeliveryDayInfo>>([]);
  const [currentDaySlotsInfo, setCurrentDaySlotsInfo] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState<any>({});
  const zipcode = 110044;

  useQuery(QUERY_ALL_SLOTS_INFO_AND_LATEST_SLOT, {
    variables: { zipcode: zipcode },
    onCompleted: onInitialDataLoad,
  });
  const [loadSlotByDaterange] = useLazyQuery(QUERY_SLOTS_BY_DATERANGE, {
    onCompleted: onSlotsDataLoad,
  });

  function onInitialDataLoad(data: any) {
    setSlotsInfo(data.slotsInfo);
    if (data.latestSlotInfo && data.latestSlotInfo.date) {
      const deliveryDaysInfo: Array<DeliveryDayInfo> = [];
      for (let i = 0; i < slotDateRangeLimit; i++) {
        const date: any = new Date(data.latestSlotInfo.date);
        date.setDate(date.getDate() + i);
        deliveryDaysInfo.push({
          date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
          weekDay: weekDays[date.getDay()],
          dayMonth: `${date.getDate()} ${shortMonths[date.getMonth()]}`,
          isSelected: !i,
        });
      }
      setDeliveryDaysInfo(deliveryDaysInfo);
      for (const slot of data.slotsInfo) {
        if (slot.key === data.latestSlotInfo.slots[0]['name']) {
          data.latestSlotInfo.slots[0]['value'] = slot.value;
          data.latestSlotInfo.slots[0]['key'] = slot.key;
        }
      }
      setSelectedSlot({ ...deliveryDaysInfo[0], ...data.latestSlotInfo.slots[0] });
      loadSlotByDaterange({
        variables: {
          startDate: data.latestSlotInfo.date,
          endDate: data.latestSlotInfo.date,
          zipcode: zipcode,
        },
      });
    }
  }

  function onSlotsDataLoad(data: any) {
    const currentDaySlotsInfo = slotsInfo.map(item => ({
      ...item,
      ...{ remaining: 0, isDisabled: true },
    }));
    if (data.fetchSlots && data.fetchSlots[0] && data.fetchSlots[0].slots) {
      const slotInfoObj = {};
      data.fetchSlots[0].slots.forEach((item: any) => {
        slotInfoObj[item.name] = { ...item };
      });

      if (data.fetchSlots[0].date === selectedSlot.date && slotInfoObj[selectedSlot.key]) {
        slotInfoObj[selectedSlot.key].isSelected = true;
      }

      for (const item of currentDaySlotsInfo) {
        if (slotInfoObj[item.key]) {
          item.remaining = slotInfoObj[item.key].remaining;
          item.isSelected = slotInfoObj[item.key].isSelected;
          item.date = data.fetchSlots[0].date;
          if (item.remaining) {
            item.isDisabled = false;
          }
        }
      }
    }
    setCurrentDaySlotsInfo(currentDaySlotsInfo);
  }

  const onSlotDaySelection = (selectedDayInfo: DeliveryDayInfo) => {
    if (!selectedDayInfo.isDisabled) {
      for (const item of deliveryDaysInfo) {
        item.isSelected = false;
      }
      selectedDayInfo.isSelected = true;
      setDeliveryDaysInfo(deliveryDaysInfo);
      loadSlotByDaterange({
        variables: {
          startDate: selectedDayInfo.date,
          endDate: selectedDayInfo.date,
          zipcode: zipcode,
        },
      });
    }
  };

  const onSlotSelection = (selectedSlotInfo: any) => {
    if (!selectedSlotInfo.isDisabled) {
      for (const item of currentDaySlotsInfo) {
        item.isSelected = false;
      }
      selectedSlotInfo.isSelected = true;
      const date: any = new Date(selectedSlotInfo.date);
      selectedSlotInfo.weekDay = weekDays[date.getDay()];
      selectedSlotInfo.dayMonth = `${date.getDate()} ${shortMonths[date.getMonth()]}`;
      setSelectedSlot(selectedSlotInfo);
      setCurrentDaySlotsInfo(currentDaySlotsInfo);

      updateContext('SLOT', selectedSlotInfo);
    }
  };

  const navigateToCheckout = () => {
    Router.push('/cart/[...slug]', '/cart/order-summary');
  };

  return (
    <Container withGutter={false} paddingBottom={12}>
      <Box>
        <Text fontSize="2em" pt={4}>
          Delivery Options
        </Text>
      </Box>
      <Flex
        alignItems="end"
        justifyContent="space-between"
        flexDirection={['column-reverse', , 'column-reverse', 'row']}>
        <Box width={'100%'}>
          <Card px={4} mb={2}>
            <AddressOptions></AddressOptions>
          </Card>
          <Card px={4}>
            <DeliverySlot
              deliveryDaysInfo={deliveryDaysInfo}
              onSlotDaySelection={onSlotDaySelection}
              slotsInfo={currentDaySlotsInfo}
              onSlotSelection={onSlotSelection}
              selectedSlot={selectedSlot}></DeliverySlot>
          </Card>
        </Box>
      </Flex>
      <PseudoBox
        as="button"
        bg={theme.themeColors.primaryColor[400]}
        py={2}
        px={4}
        mt={3}
        ml={3}
        w={'100%'}
        m={0}
        rounded="md"
        fontWeight="semibold"
        color="white"
        _hover={{ bg: theme.themeColors.primaryColor[300] }}
        _focus={{ boxShadow: 'outline' }}
        onClick={navigateToCheckout}>
        Proceed to Checkout
      </PseudoBox>
    </Container>
  );
};

export default DeliveryOptions;
