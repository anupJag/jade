/**
 * RELEASE OR DELETE A SLOT, IF USER DECIDES TO CHANGE THE SLOT OR IF THE SESSION EXPIRES
 */

import { getLogger } from '@jade/graphql/base';
import SlotModel from '../model';

export const releaseSlot = async (id: string) => {
  const logger = getLogger();
  logger.info('--- RELEASE SLOT ---', id);

  return SlotModel.findByIdAndDelete(id);
};
