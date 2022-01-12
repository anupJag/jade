import { PromotionModel } from '../model';
import { getLogger } from '@jade/graphql/base';
import { IPromotion } from '../types';
import { defaultDataLoad } from '../data/initialMockPromotions';

const logger = getLogger();

export const loadDefaultPromotion = async (): Promise<IPromotion[]> =>
  PromotionModel.insertMany([...defaultDataLoad], { ordered: false }, function (err) {
    if (err) {
      logger.error('--- LOAD DEFAULT PROMOTIONS --- Failed to load data', err);
    }
  });
