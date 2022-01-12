import gql from 'graphql-tag';

export const QUERY_CONTENT_LABELS = gql`
  query content($labelName: String!, $configName: String!) {
    label(name: $labelName) {
      labelName
      labelValue
    }
    config(name: $configName) {
      configName
      configOption
      textConfig
    }
  }
`;

export const contentLabelVars = {
  labelName: 'contentAppLabels',
  configName: 'contentAppConfigs',
};

export const QUERY_PAGE_LAYOUT = gql`
  query staticLayout($name: String!) {
    pageLayout(name: $name) {
      slug
      layout {
        slots {
          contentId
          moduleName
        }
      }
    }
  }
`;

export const contentLayoutVars = {
  name: 'staticPageLayout',
};

export const getDynamicQuery = (moduleName, moduleID, fields) => {
  return gql`
  query {
    data: ${moduleName}(id: "${moduleID}") {
      ${fields}
    }
  }
  `;
};

export const STATIC_PAGE_FIELDS = {
  dynamicHeadingContent: `
    title
    content
    backgroundColor
  `,
  columnWithLinksGroups: `
    linkSectionsCollection {
      items {
        ... on ColumnWithLinks {
          header
          links: groupOfLinksCollection {
            items {
              ... on Link {
                href: linkUrl
                label: linkText
              }
            }
          }
        }
      }
    }
  `,
  headingWithContentList: `
    headingWithContentCollection {
        items {
            ... on DynamicHeadingContent {
                title
                content
            }
        }
    }
  `,
  promotionList: `
    layout
    heading
    imageSections: imageSectionsCollection {
        items {
            ... on Image {
                imageName
                linkUrl: link
                imgAlt: imageCaption
                imgUrl: imageFile  {
                    url
                }
            }
        }
    }
  `,
  accordionList: `
    accordionItemsCollection {
      items  {
        ... on ContactUsAccordion {
          heading
          description
          cards: cardsCollection {
            items {
              ... on ContactUsCard {
                icon
                heading
                description
                linkText
                linkUrl
              }
            }
          }
        }
      }
    }
  `,
};
