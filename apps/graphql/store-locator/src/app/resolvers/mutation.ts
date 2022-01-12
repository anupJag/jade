import { addStore } from '../api';

export default {
  addStore: async (_parent: any, { details }) => await addStore(details),
};
