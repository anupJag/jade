/**
 * ONE TIME JOB, USED TO CREATE SLOT INFORMATION IF THE DATA IS NOT AVAILABLE IN THE DB
 */

import { SLOT_DATA, SLOT_INFO, ISlotInformation } from '../types';
import { SlotInformationModel } from '../model';
import { getLogger } from '@jade/graphql/base';

export const createSlotInformation = async (): Promise<ISlotInformation[]> => {
  // CREATE THE SLOT INFOMRATION
  let tempSlotInformation = [];

  const logger = getLogger();

  for (const key in SLOT_INFO) {
    tempSlotInformation.push({
      key,
      value: SLOT_DATA[key],
    });
  }

  logger.info('--- CREATE SLOT INFORMATION ---', 'ADDED DEFAULT SLOT DATA');

  return SlotInformationModel.insertMany([...tempSlotInformation]);
};
