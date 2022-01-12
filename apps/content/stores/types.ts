export type ContentAppLabels = {
  [key: string]: string;
};

export type ContentAppConfig = {
  [key: string]: string;
};

export type State = {
  label: ContentAppLabels;
  config: ContentAppConfig;
};

export type Action = { type: string };
