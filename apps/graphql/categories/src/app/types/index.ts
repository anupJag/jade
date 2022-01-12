import { Document, Types } from 'mongoose';

export { Types } from 'mongoose';

export interface IObject {
  [key: string]: any;
}

export type ICategoryType = {
  id: string;
  name: string;
  categoryIdentifier: string;
  isRootCategory?: boolean;
  parentId: string,
  image: string,
  children?: Array<ICategoryType>;
};


