import '@testing-library/jest-dom/extend-expect';
import { setConfig } from 'next/config';
import config from '../../next.config';

setConfig(config);

/* eslint-disable @typescript-eslint/no-empty-function */
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
