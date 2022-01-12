import gql from 'graphql-tag';

export const QUERY_ALL_SLOTS_INFO_AND_LATEST_SLOT = gql`
  query getSlotsInfoAndLatestSlot($zipcode: Int!) {
    slotsInfo: fetchSlotInfo {
      id
      key
      value
    }
    latestSlotInfo: latestSlot(zipcode: $zipcode) {
      date
      slots {
        name
        remaining
      }
    }
  }
`;

export const QUERY_SLOTS_BY_DATERANGE = gql`
  query getSlots($startDate: String!, $endDate: String!, $zipcode: Int!) {
    fetchSlots(startDate: $startDate, endDate: $endDate, zipcode: $zipcode) {
      date
      slots {
        name
        remaining
      }
    }
  }
`;
