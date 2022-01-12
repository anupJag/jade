import { getLogger } from '@jade/graphql/base';
import SlotModel from '../model';
import { ISlotAvailability, ISlotInformation } from '../types';
import { getSlotInformation } from './getSlotInformation';
import { checkFormat, dateDiffInDays, getFormattedDate } from '../utils';

const TOTAL_NUM_RESERVATION_AVAILABLE_PER_SLOT: number = 4;

/**
 * @function
 * This service queries the DB for slots between a time range and return back an array with availability
 */
export const getSlots = async (
  startDate: string,
  endDate: string,
  zipcode: number,
): Promise<ISlotAvailability[]> => {
  const logger = getLogger();

  if (!(startDate && endDate)) {
    logger.error('--- GET SLOTS --- ARGUMENTS ARE UNDEFINED');
    return [];
  }

  const tempStartDate = new Date(`${checkFormat(startDate)}T00:00:00.000+00:00`);
  const tempEndDate = new Date(`${checkFormat(endDate)}T00:00:00.000+00:00`);

  if (
    tempStartDate &&
    tempEndDate &&
    tempStartDate.toString() === 'Invalid Date' &&
    tempStartDate.toString() === 'Invalid Date'
  ) {
    logger.error('--- GET SLOTS --- DATE VALIDATION FAILED');
    return [];
  }

  if (tempEndDate.getTime() < tempStartDate.getTime()) {
    logger.error('--- GET SLOTS --- Failed Date Check Validation');
    return [];
  }

  const getSlotsBetweenDates = await SlotModel.find({
    date: {
      $gte: tempStartDate,
      $lte: tempEndDate,
    },
  });

  let slotAvailability: ISlotAvailability[] = [];

  // CREATE THE SLOT AVAILABILITY ARRAY WITH MAX REMAINING AS 4
  // CALCULATE THE DIFFERENCE IN DATES
  const numberOfDays = dateDiffInDays(tempStartDate, tempEndDate);

  // GET SLOT INFORMATION

  const SLOT_INFO: ISlotInformation[] = await getSlotInformation();

  for (let index = 0; index <= numberOfDays; index++) {
    // CREATING A NEW VARIABLE TO AVOID DATE MUTATION
    const indexDate = new Date(tempStartDate);

    // STORE THE NEW CALCULATED DATE BASED ON DAYS DIFFERENCE
    const calcuatedDate = new Date(indexDate.setDate(indexDate.getDate() + index));
    let slotData: ISlotAvailability = {
      date: getFormattedDate(calcuatedDate),
      slots: [],
    };

    for (let slotIndex = 0; slotIndex < SLOT_INFO.length; slotIndex++) {
      // EXTRACT THE COUNT OF THE TOTAL NUMBER OF SLOTS TAKEN
      // FILTER BASED ON THE SLOT, DATE & ZIPCODE
      const filteredData = getSlotsBetweenDates.filter(
        el =>
          el.name === SLOT_INFO[slotIndex].key &&
          el.date.getTime() === calcuatedDate.getTime() &&
          el.zipcode === zipcode,
      );

      const remainingSlots: number = TOTAL_NUM_RESERVATION_AVAILABLE_PER_SLOT - filteredData.length;

      // IF THERE ARE NO SLOTS REMAINING, REMOVE DATA FROM RESPONSE
      if (remainingSlots <= 0) continue;

      slotData.slots.push({
        name: SLOT_INFO[slotIndex].key,
        remaining: TOTAL_NUM_RESERVATION_AVAILABLE_PER_SLOT - filteredData.length,
      });
    }

    slotAvailability.push(slotData);
  }

  return slotAvailability;
};
