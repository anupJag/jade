import { loadFiles } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { DocumentNode } from 'graphql';

export const getTypeDefs = async (path: string): Promise<DocumentNode> => {
  const typesArray = await loadFiles(path);
  const types = mergeTypeDefs(typesArray);
  return types;
};
