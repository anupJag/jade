import {
  getArticle,
  getImage,
  getLink,
  getPageMetadata,
  getLabels,
  getConfig,
  getPageLayout,
} from './query';

export default {
  Query: {
    link: getLink,
    pageMetadata: getPageMetadata,
    article: getArticle,
    image: getImage,
    label: getLabels,
    config: getConfig,
    pageLayout: getPageLayout,
  },
};
