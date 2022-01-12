import { PromotionModel } from '../model';
import { IPromotion } from '../types';

export const createPromotion = async (promoDetails: IPromotion): Promise<IPromotion> => {
  const promotion = new PromotionModel(promoDetails);
  return promotion.save();
};
