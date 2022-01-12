import React, { useContext } from 'react';
import { Context } from '@jade/store';

/* eslint-disable-next-line */
export interface AppLabelProps {
  path: string;
}

export const createdAppLabel = appContext => ({ path }: AppLabelProps) => {
  const { state } = useContext(appContext);
  const { label = {} } = state;
  return <>{label[path] || path}</>;
};

export const GlobalLabel = createdAppLabel(Context);
