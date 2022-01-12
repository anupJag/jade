/**
 * Confirm a Slot once a Order is booked.
 *
 * The confirmed slot will now contain the orderId for the which the slot was reserved
 */

import SlotModel from '../model';
import { ISlot } from '../types';
import { getLogger } from '@jade/graphql/base';

export const confirmSlot = async (id: string, orderId: any): Promise<ISlot> => {
  const logger = getLogger();
  await SlotModel.findByIdAndUpdate({ _id: id }, { orderId }, function (err) {
    logger.error('--- SLOT CONFIRMATION FAILED ---', err);
  });

  const updatedValue = await SlotModel.findById(id);
  return updatedValue;
};
