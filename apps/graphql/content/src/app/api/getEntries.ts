import { getContentfulClient } from '@jade/graphql/base';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEntries = async (query): Promise<any> => {
  const client = getContentfulClient();
  const data = await client.getEntries(query);
  return data.items;
};
