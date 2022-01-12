import { getEntryById } from '../api/getEntryById';
import { getEntries } from '../api/getEntries';
import parseArticle from '../utils/parseArticle';
import parseImage from '../utils/parseImage';

export const getLink = async (_parent, { id }) => {
  return getEntryById(id);
};

export const getArticle = async (_parent, { name }) => {
  const data = await getEntries({
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: 'article',
    'fields.articleName': name,
    include: 10,
  });
  const response = parseArticle(data[0]);
  return response;
};

export const getImage = async (_parent, { name }) => {
  const data = await getEntries({
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: 'image',
    'fields.imageName': name,
    include: 2,
  });
  const response = parseImage(data[0]);
  return response;
};

export const getLabels = async (_parent, { name }) => {
  const data = await getEntries({
    content_type: name,
  });
  return data.map(item => item.fields);
};

export const getConfig = async (_parent, { name }) => {
  const data = await getEntries({
    content_type: name,
  });
  return data.map(item => item.fields);
};

export const getPageLayout = async (_parent, { name }) => {
  const data = await getEntries({
    content_type: name,
  });
  return data.map(item => item.fields);
};

export const getPageMetadata = async (_parent, { route }) => {
  const data = await getEntries({
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: 'pageMetadata',
    'fields.pageRoute': route,
  });
  if (data.length === 0) {
    throw 'No page metadata found.';
  }
  const {
    pageRoute,
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    shouldIndex,
  } = data[0].fields;
  return {
    pageRoute,
    pageTitle,
    pageDescription,
    pageKeywords,
    shouldIndex,
  };
};
