import SlotModel from '../model';
import { ISlot, SLOT_INFO } from '../types';

const findSlotsByFilter = async (
  slot: keyof typeof SLOT_INFO,
  date: Date,
  zipcode: number,
): Promise<ISlot[]> => {
  return SlotModel.find({
    date,
    name: slot,
    zipcode,
  });
};

export default findSlotsByFilter;
