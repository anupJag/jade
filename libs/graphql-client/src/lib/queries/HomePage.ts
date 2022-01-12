import gql from 'graphql-tag';

export const HOME_PAGE_QUERY = gql`
  query homepage(
    $name: String!
    $route: String!
    $templateAImageName: String!
    $templateBImageName: String!
  ) {
    pageMetadata(route: $route) {
      pageRoute
      pageTitle
      pageDescription
      pageKeywords
      shouldIndex
    }
    categoryImageSection: article(name: $name) {
      title
      content
      image {
        imgUrl: imageFile
        imgAlt: imageCaption
        linkUrl: imageLink
      }
    }
    templateAImage: image(name: $templateAImageName) {
      imgUrl: imageFile
      imgAlt: imageCaption
      linkUrl: imageLink
    }
    templateBImage: image(name: $templateBImageName) {
      imgUrl: imageFile
      imgAlt: imageCaption
      linkUrl: imageLink
    }
  }
`;

export const homePageVars = {
  route: '/',
  name: 'homepage-fruits-and-vegetables',
  templateAImageName: 'home-page-hero-template-a',
  templateBImageName: 'home-page-hero-template-b',
};
