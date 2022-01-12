import { model, Schema } from 'mongoose';
import { ISlot, ISlotInformation } from '../types';

const SlotSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  zipcode: {
    type: Schema.Types.Number,
    required: true,
  },
  orderId: {
    type: Schema.Types.ObjectId,
  },
});

const SlotModel = model<ISlot>('Slot', SlotSchema);

const SlotInformation = new Schema({
  key: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  value: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
});

export const SlotInformationModel = model<ISlotInformation>('SlotInformation', SlotInformation);

export default SlotModel;
