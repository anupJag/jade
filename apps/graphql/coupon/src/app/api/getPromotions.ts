import { getLogger } from '@jade/graphql/base';
import { PromotionModel } from '../model';
import { IPromotion } from '../types';
import { loadDefaultPromotion } from './loadDefaultData';

export const getPromotions = async (): Promise<IPromotion[]> => {
  const logger = getLogger();
  const promotions = await PromotionModel.find({});

  logger.info(`--- FETCHED PROMOTIONS -- TOTAL PROMOTIONS ${promotions.length}`);

  if (promotions?.length > 0) return promotions;

  logger.info('--- FETCHED PROMOTIONS --- NO RECORD EXISTS -- CREATE DEFAULT DATA');

  return loadDefaultPromotion();
};
