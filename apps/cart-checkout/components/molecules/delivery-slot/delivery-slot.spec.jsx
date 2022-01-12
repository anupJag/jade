import React from 'react';
import { ThemeProvider } from '@jade/ui/themes';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { DeliverySlot } from './delivery-slot';

describe.only('DELIVERY SLOT', () => {
  test('Should render without any error', () => {
    const props = {
      selectedSlot: {
        weekDay: 'Monday',
        dayMonth: '2 Feb',
        value: '08:00 - 10:00',
      },
      slotsInfo: [
        {
          key: 'SLOT_1',
          value: '08:00 - 10:00',
          isSelected: false,
          isDisabled: false,
        },
      ],
      deliveryDaysInfo: [
        {
          date: '2020-11-03',
          weekDay: 'Monday',
          dayMonth: '2 Feb',
          isSelected: true,
          isDisabled: false,
        },
      ],
      onSlotSelection: jest.fn(),
      onSlotDaySelection: jest.fn(),
    };

    render(
      <ThemeProvider>
        <DeliverySlot {...props} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('delivery-slot-wrapper')).toBeDefined();
  });
});
