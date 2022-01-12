import parseImage from './parseImage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseArticle = (data: any) => {
  data = data.fields ? data.fields : data;
  const response = {
    articleName: data.articleName,
    title: data.title,
    image: data.image.map(parseImage),
  };
  return response;
};
export default parseArticle;
