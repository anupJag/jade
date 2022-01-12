import { IPromotion } from '../types';

export const defaultDataLoad: Array<Partial<IPromotion>> = [
  {
    startDate: new Date('2020-01-01T00:00:00.000+00:00'),
    endDate: new Date('2020-12-31T00:00:00.000+00:00'),
    shortDescription: 'All year Promotion',
    longDescription: 'Get Flat 5% off Upto $25',
    promoGroup: 'ORDER',
    promoType: 'PercOff',
    condition: {
      minimumOrderAmount: 100,
      maximumDiscountAmount: 25,
    },
    reward: {
      percOff: 5,
    },
  },
  {
    startDate: new Date('2020-11-01T00:00:00.000+00:00'),
    endDate: new Date('2020-11-31T00:00:00.000+00:00'),
    shortDescription: 'Halloween offers',
    longDescription: 'Get Flat $20 off',
    promoGroup: 'ORDER',
    promoType: 'AmountOff',
    condition: {
      minimumOrderAmount: 100,
    },
    reward: {
      amountOff: 20,
    },
  },
  {
    startDate: new Date('2020-11-15T00:00:00.000+00:00'),
    endDate: new Date('2020-12-31T00:00:00.000+00:00'),
    shortDescription: 'Christmas offers',
    longDescription: 'Get Flat 7.5% off upto $100',
    promoGroup: 'ORDER',
    promoType: 'AmountOff',
    condition: {
      minimumOrderAmount: 100,
    },
    reward: {
      amountOff: 20,
    },
  },
];
