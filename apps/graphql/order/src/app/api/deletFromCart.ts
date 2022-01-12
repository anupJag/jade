import { Document, Types } from 'mongoose';
import { ICart } from '../types';
import CartModel from '../model';

export interface IDeleteCart extends Document {
  addedBy: Types.ObjectId;
  id: Types.ObjectId;
}

export const deleteFromCart = async (data: IDeleteCart): Promise<ICart | null> => {
  const result = await CartModel.findOneAndDelete({
    addedBy: data.addedBy,
    _id: data.id,
  });
  return result;
};
