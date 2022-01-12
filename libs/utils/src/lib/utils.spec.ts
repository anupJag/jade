import { formatUrl, utils } from './utils';

describe('utils', () => {
  it('should work', () => {
    expect(utils()).toEqual('utils');
  });
});

describe('formatUrl', () => {
  it('should work', () => {
    expect(formatUrl('dummy data', '-')).toEqual('dummy-data');
  });
});
