import { ICart } from '../types';
import CartModel from '../model';

export const addToCart = async (data: ICart): Promise<ICart> => {
  return await CartModel.findOneAndUpdate(
    {
      addedBy: data.addedBy,
      productId: data.productId,
    },
    data,
    {
      new: true,
      upsert: true,
    },
  );
};
