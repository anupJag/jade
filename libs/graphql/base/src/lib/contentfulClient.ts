import { ContentfulClientApi, createClient } from 'contentful';

let _contentfulInstance: ContentfulClientApi | null = null;
export const createContentfulClient = () => {
  const isDeliveryClient: boolean = process.env.CONTENTFUL_CLIENT_TYPE === 'delivery';
  const cmsConfig = {
    application: process.env.APP_NAME,
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: isDeliveryClient
      ? process.env.CONTENTFUL_DELIVERY_TOKEN
      : process.env.CONTENTFUL_PREVIEW_TOKEN,
    host: isDeliveryClient
      ? process.env.CONTENTFUL_DELIVERY_API_HOST
      : process.env.CONTENTFUL_PREVIEW_API_HOST,
    removeUnresolved: true,
  };
  _contentfulInstance = createClient(cmsConfig);
  return _contentfulInstance;
};

export const getContentfulClient = () => _contentfulInstance;
