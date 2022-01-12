import { ISlotInformation } from '../types';
import { SlotInformationModel } from '../model';
import { createSlotInformation } from './createSlotInformation';

// FETCH SLOT INFORMATION DATA, IF SLOT INFOMRATION IS NOT AVAILABLE
// CREATE THE SLOT INFORMATION AND RETURN BACK THE RESPONSE

export const getSlotInformation = async (): Promise<ISlotInformation[]> => {
  // FETCH SLOT DATA IF AVAILABLE
  const fetchSlotInformation: ISlotInformation[] = await SlotInformationModel.find({});

  // SLOT INFORMATION ALREADY EXISTS, RETURN DATA FETCHED
  if (fetchSlotInformation?.length > 0) return fetchSlotInformation;

  // SLOT INFORMATION DOES NOT EXIST, CREATE THE DATA IN THE DATABASE AND RETURN IT
  return await createSlotInformation();
};
