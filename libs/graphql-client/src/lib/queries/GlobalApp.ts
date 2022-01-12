import gql from 'graphql-tag';

export const QUERY_GLOBAL_LABELS = gql`
  query globals($labelName: String!, $configName: String!) {
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

export const globalLabelVars = {
  labelName: 'globalAppLabels',
  configName: 'globalAppConfigs',
};
