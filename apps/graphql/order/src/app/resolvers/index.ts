import Query from './query';
import Mutation from './mutation';
import external from './external';

export default {
  Query,
  Mutation,
  ...external,
};
