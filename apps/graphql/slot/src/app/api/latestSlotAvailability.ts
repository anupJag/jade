import { ISlotAvailability } from '../types';
import { getSlots } from './getSlots';

export const getLatestAvailableSlot = async (zipcode: number): Promise<ISlotAvailability | {}> => {
  // ITERATE OVER EACH DATE FROM TODAY UNTILLL AN AVAILABLE SLOT IS FOUND
  // KILL LOOP AFTER 21 TIMES (i.e. 3 WEEK ITERATION) AS A KILL SWITCH
  // IF SLOT INFORMATION IS NOT FOUND

  let killSwitch: boolean = false;
  let iterationCountRecord: number = 0;
  let slotAvailable: Partial<ISlotAvailability> = {};
  // MAXIMUM NUMBER OF ITERATIONS FROM TODAY
  const MAX_ITERATION_COUNT: number = 6;

  while (!killSwitch) {
    const currentDate = new Date();

    // Caculate Date Based on iteration Count
    const calculatedDate = new Date(
      currentDate.setDate(currentDate.getDate() + iterationCountRecord),
    );

    // EXTRACT DATE AS STRING AS 'YYYY-MM-DD' FORMAT
    const extractDateAsString: string = `${calculatedDate.getFullYear()}-${
      calculatedDate.getMonth() + 1
    }-${calculatedDate.getDate()}`;

    // FETCHING EACH DAY SLOTS, TO FIND THE NEXT AVAILABLE SLOT
    const slotAvailableData = await getSlots(extractDateAsString, extractDateAsString, zipcode);

    // GET SLOTS WILL ALWAYS RETURN AN ARRAY WITH A SINGLE RECORD
    if (slotAvailableData[0].slots?.length > 0) {
      // IF SLOTS FOR A GIVE DAY EXISITS, THE FIRST SLOT IS THE AVAILABLE SLOT

      const firstAvailableSlot = slotAvailableData[0].slots[0];

      slotAvailable = {
        date: extractDateAsString,
        slots: [
          {
            ...firstAvailableSlot,
          },
        ],
      };

      // BREAK LOOP
      killSwitch = true;
    } else {
      // INCREASE COUNT AND CHECK
      ++iterationCountRecord;

      // MAX ITERATION COUNT CHECK
      if (iterationCountRecord > MAX_ITERATION_COUNT) {
        killSwitch = true;
      }
    }
  }

  return slotAvailable;
};
