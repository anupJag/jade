import { IObject } from '../types';
import { getPromotions, getApplicablePromotion } from '../api';

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchPromotions: async (_parent: any) => await getPromotions(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchApplicablePromotions: async (_parent: any, { minOrderAmount }) =>
    await getApplicablePromotion(minOrderAmount),
};
