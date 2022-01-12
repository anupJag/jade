import { Document, Types } from 'mongoose';

export enum SLOT_INFO {
  SLOT_1 = 'SLOT_1',
  SLOT_2 = 'SLOT_2',
  SLOT_3 = 'SLOT_3',
  SLOT_4 = 'SLOT_4',
  SLOT_5 = 'SLOT_5',
}

export enum SLOT_DATA {
  SLOT_1 = '08:00 - 10:00',
  SLOT_2 = '10:00 - 12:00',
  SLOT_3 = '12:00 - 14:00',
  SLOT_4 = '14:00 - 16:00',
  SLOT_5 = '16:00 - 18:00',
}

export interface ISlotInformation extends Document {
  key: string;
  value: string;
}

export interface IObject {
  [key: string]: any;
}

export interface ISlotInfo {
  name: string;
  remaining: number;
}

export interface ISlotAvailability {
  date: string;
  slots: Array<ISlotInfo>;
}

export interface ISlot extends Document {
  /**
   * Auto generated Slot ID
   * @type {string}
   */
  id: Types.ObjectId;

  /**
   * NAME OF THE SLOT
   * @type {string}
   */
  name: keyof typeof SLOT_INFO;

  /**
   * DATE OF THE SLOT
   * @type {Date}
   */
  date: Date;

  /**
   * Zipcode
   * @type {number}
   */
  zipcode: number;

  /**
   * ORDER ID
   * @type {ObjectId}
   */
  orderId: Types.ObjectId;
}
