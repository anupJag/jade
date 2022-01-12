import { getSlots, getSlotInformation, getLatestAvailableSlot } from '../api';
import { IObject } from '../types';

export default {
  fetchSlots: async (_parent: any, { startDate, endDate, zipcode }: IObject) =>
    await getSlots(startDate, endDate, zipcode),
  fetchSlotInfo: async (__parent: any) => await getSlotInformation(),
  latestSlot: async (__prarnet: any, { zipcode }: IObject) => await getLatestAvailableSlot(zipcode),
};
