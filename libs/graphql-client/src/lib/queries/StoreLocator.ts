import gql from 'graphql-tag';

export const QUERY_STORES = gql`
  query GetStores {
    stores: fetchStores {
      id
      address {
        addressLine1
        addressLine2
        city
        state
        country
        postalCode
      }
      name
      description
      contactNo
      location {
        latitude
        longitude
      }
      openHours {
        sun {
          openingTime
          closingTime
        }
        mon {
          openingTime
          closingTime
        }
        tue {
          openingTime
          closingTime
        }
        wed {
          openingTime
          closingTime
        }
        thu {
          openingTime
          closingTime
        }
        fri {
          openingTime
          closingTime
        }
        sat {
          openingTime
          closingTime
        }
      }
      timezone
      openHourInfo
      thumbnailImage
      images
    }
  }
`;

export const QUERY_STORES_BY_POSTALCODE = gql`
  query GetStoresByPostalcode($postalCode: String!) {
    stores: fetchStoresByPostalcode(postalCode: $postalCode) {
      id
      address {
        addressLine1
        addressLine2
        city
        state
        country
        postalCode
      }
      name
      description
      contactNo
      location {
        latitude
        longitude
      }
      openHours {
        sun {
          openingTime
          closingTime
        }
        mon {
          openingTime
          closingTime
        }
        tue {
          openingTime
          closingTime
        }
        wed {
          openingTime
          closingTime
        }
        thu {
          openingTime
          closingTime
        }
        fri {
          openingTime
          closingTime
        }
        sat {
          openingTime
          closingTime
        }
      }
      timezone
      openHourInfo
      thumbnailImage
      images
    }
  }
`;

export const QUERY_STORE_BY_ID = gql`
  query GetStoreById($storeId: ID!) {
    store: fetchStore(storeId: $storeId) {
      id
      address {
        addressLine1
        addressLine2
        city
        state
        country
        postalCode
      }
      name
      description
      contactNo
      location {
        latitude
        longitude
      }
      openHours {
        sun {
          openingTime
          closingTime
        }
        mon {
          openingTime
          closingTime
        }
        tue {
          openingTime
          closingTime
        }
        wed {
          openingTime
          closingTime
        }
        thu {
          openingTime
          closingTime
        }
        fri {
          openingTime
          closingTime
        }
        sat {
          openingTime
          closingTime
        }
      }
      timezone
      openHourInfo
      thumbnailImage
      images
    }
  }
`;
