import gql from 'graphql-tag';

export const QUERY_GLOBAL_CONFIG_LABELS = gql`
  query {
    globalAppLabelsCollection {
      items {
        labelName
        labelValue
      }
    }
    globalAppConfigsCollection {
      items {
        configName
        configOption
        textConfig
      }
    }
  }
`;

export const HOME_PAGE_LABELS_QUERY = gql`
  query {
    contentAppLabelsCollection {
      items {
        labelName
        labelValue
      }
    }
  }
`;

export const QUERY_PAGE_LAYOUT = gql`
  query {
    staticPageLayoutCollection {
      items {
        layout
        slug
      }
    }
  }
`;

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
