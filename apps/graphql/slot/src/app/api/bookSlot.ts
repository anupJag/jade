import { getLogger } from '@jade/graphql/base';
import SlotModel from '../model';
import { ISlot } from '../types';
import findSlotsByFilter from './findSlotsByFilter';
import { checkFormat } from '../utils';

/**
 * @function bookSlot
 * Function will reserve a slot for the user
 *
 * @param {ISlot} data
 *
 * @return {Promise<ISlot>}
 */
export const bookSlot = async (data: ISlot): Promise<ISlot> => {
  const { name, date, orderId, zipcode } = data;
  const logger = getLogger();

  const dateFormat = new Date(date);

  if (dateFormat && dateFormat.toString() === 'Invalid Date') {
    logger.error('--- BOOKING SLOT ERROR --- Invalid Date format');
    return;
  }

  const correctDateFormat = checkFormat(
    `${dateFormat.getFullYear()}-${dateFormat.getMonth() + 1}-${dateFormat.getDate()}`,
  );

  const newDate = new Date(`${correctDateFormat}T00:00:00Z`);

  const checkForSlots = await findSlotsByFilter(name, newDate, zipcode);

  if (checkForSlots.length > 3) {
    logger.info('--- BOOKING SLOT ERROR --- SLOTS FILLED');
    return;
  }

  const bookNewSlot = new SlotModel({
    name,
    date: newDate,
    orderId,
    zipcode,
  });

  return bookNewSlot.save();
};
