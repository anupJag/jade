import { IObject } from '../types';
import { bookSlot, releaseSlot, confirmSlot } from '../api';

export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  reserveSlot: async (_parent: any, { details }: IObject) => await bookSlot(details),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  releaseSlot: async (_parent: any, { id }: IObject) => await releaseSlot(id),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  confirmSlot: async (_parent: any, { id, orderId }: IObject) => await confirmSlot(id, orderId),
};
