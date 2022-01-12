import { model, Schema } from 'mongoose';
import { SCHEMA_NAME } from '@jade/graphql/base';

let categorieschema;

categorieschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categoryIdentifier: {
    type: String,
    required: true,
  },
  isRootCategory: {
    type: Boolean,
  },
  parentId: {
    type: String,
  },
  image: {
    type: String
  },
  children: {
    type: [typeof categorieschema]
  }
});


export default model(SCHEMA_NAME.CATEGORIES, categorieschema);
