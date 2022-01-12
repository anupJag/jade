interface LabelCollections {
  labelName: string;
  labelValue: string;
}

interface ConfigCollections {
  configName: string;
  configOption: boolean;
  textConfig: string;
}

export const formatLabelsCollection = (collection: Array<LabelCollections>) => {
  const formattedObj = {};

  collection.forEach(item => {
    formattedObj[item.labelName] = item.labelValue;
  });

  return formattedObj;
};

export const formatConfigCollection = (collection: Array<ConfigCollections>) => {
  const formattedObj = {};

  collection.forEach(item => {
    formattedObj[item.configName] = item.configOption ?? item.textConfig;
  });

  return formattedObj;
};
