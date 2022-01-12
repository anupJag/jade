import { getLogger } from '@jade/graphql/base';
import { PromotionModel } from '../model';
import { IPromotion } from '../types';

const checkFormat = (dateAsString: string): string => {
  // FETCHING DATE FIELD
  let tempDate = dateAsString.split('-');
  let dateFromString: string =
    parseInt(tempDate[2], 10) < 10 ? `0${parseInt(tempDate[2], 10)}` : tempDate[2];
  tempDate.splice(2, 1, dateFromString);
  return tempDate.join('-');
};

export const getApplicablePromotion = async (minOrderAmount: number): Promise<IPromotion[]> => {
  const logger = getLogger();
  const currentDate = new Date();
  // EXTRACT DATE AS STRING AS 'YYYY-MM-DD' FORMAT

  const dateFormat = checkFormat(
    `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
  );

  const extractDate = new Date(`${dateFormat}T00:00:00.000+00:00`);

  logger.info('--- FINIDING AVAILABLE PROMOTION FOR DATE ---', extractDate);

  // ORDER LEVEL PROMOTION, FETCH PROMOTIONS THAT ARE NOT EXPIRED
  // CHECK IF MINIMUM ORDER AMOUNT CONDITION IS MET
  const promotions = await PromotionModel.find(
    {
      startDate: {
        $lte: extractDate,
      },
      endDate: {
        $gte: extractDate,
      },
      'condition.minimumOrderAmount': {
        $lte: minOrderAmount,
      },
    },
    function (err) {
      if (err) {
        logger.error('--- GET APPLICABLE PROMOTIONS --- Failed to fetch data', err);
      }
    },
  );

  return promotions;
};
