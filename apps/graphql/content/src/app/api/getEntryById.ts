import { getContentfulClient } from '@jade/graphql/base';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEntryById = async (id: string): Promise<any> => {
  const client = getContentfulClient();
  const data = await client.getEntry(id);
  return data.fields;
};
