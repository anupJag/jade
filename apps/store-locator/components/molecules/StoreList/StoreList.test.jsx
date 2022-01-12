import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';

import { StoreList } from './index';
import { LabelContext } from '../../../stores/LabelContext';

describe('StoreList', () => {
  let StoreListComponent = '';

  beforeEach(() => {
    const data = [
      {
        id: '5f93f0d2d64785a0f430a024',
        name: 'Covent Garden Metro',
        description: 'Covent Garden Metro',
        address: {
          addressLine1: '22-25 Bedford St,',
          addressLine2: 'Covent Garden, London',
          city: 'London',
          state: 'London',
          country: 'United Kingdom',
          postalCode: 'WC2E 9EQ',
        },
        contactNo: '0345 026 9353',
        location: {
          latitude: 51.507404,
          longitude: -0.12724,
        },
        openHourInfo: 'Opening hours vary for some facilities.',
        thumbnailImage:
          'https://images.ctfassets.net/r1nemv2qs9l3/6jfs8jFS2U8346IVZSKVMs/0e9ba48db1fc04c39ea644c97d6c57aa/thumb1.jpg?fit=fill&fm=jpg&fl=progressive&h=200&w=200',
        images: [
          'https://images.ctfassets.net/r1nemv2qs9l3/2srrAwkz57zwaSCL5IRDTs/7103a35e889b2dd2339fc3ad9f8395d9/store1.jpg?fit=fill&fm=jpg&fl=progressive&h=720&w=1280',
          'https://images.ctfassets.net/r1nemv2qs9l3/2ODKVNobEPcoJFNaFGkPia/8f9c93f610091fbaec6b54a4b03c88f3/store2.jpeg?fit=fill&fm=jpg&fl=progressive&h=720&w=1280',
        ],
        openHours: {
          mon: {
            openingTime: '07:00',
            closingTime: '23:00',
          },
          tue: {
            openingTime: '07:00',
            closingTime: '23:00',
          },
          wed: {
            openingTime: '07:00',
            closingTime: '23:00',
          },
          thu: {
            openingTime: '07:00',
            closingTime: '23:00',
          },
          fri: {
            openingTime: '07:00',
            closingTime: '23:00',
          },
          sat: {
            openingTime: '07:00',
            closingTime: '23:00',
          },
          sun: {
            openingTime: '07:00',
            closingTime: '23:00',
          },
        },
        timezone: '+5.0',
      },
      {
        id: '5f9a2da8e887a1f7ce0fa752',
        name: 'Charing Cross Express',
        description: 'Covent Garden Metro',
        address: {
          addressLine1: '1-4 Charing Cross',
          addressLine2: '1-4 Charing Cross',
          city: 'London',
          state: 'London',
          country: 'United Kingdom',
          postalCode: 'SW1A 2DR',
        },
        contactNo: '0345 026 9353',
        location: {
          latitude: 51.507404,
          longitude: -0.12734,
        },
        openHourInfo: 'Opening hours vary for some facilities.',
        thumbnailImage:
          'https://images.ctfassets.net/r1nemv2qs9l3/6jfs8jFS2U8346IVZSKVMs/0e9ba48db1fc04c39ea644c97d6c57aa/thumb1.jpg?fit=fill&fm=jpg&fl=progressive&h=200&w=200',
        images: [
          'https://images.ctfassets.net/r1nemv2qs9l3/2srrAwkz57zwaSCL5IRDTs/7103a35e889b2dd2339fc3ad9f8395d9/store1.jpg?fit=fill&fm=jpg&fl=progressive&h=720&w=1280',
          'https://images.ctfassets.net/r1nemv2qs9l3/2ODKVNobEPcoJFNaFGkPia/8f9c93f610091fbaec6b54a4b03c88f3/store2.jpeg?fit=fill&fm=jpg&fl=progressive&h=720&w=1280',
        ],
        openHours: {
          mon: '7am - 11pm',
          tue: '7am - 11pm',
          wed: '7am - 11pm',
          thu: '7am - 11pm',
          fri: '7am - 11pm',
          sat: '7am - 11pm',
          sun: '7am - 11pm',
        },
        timezone: '+5.0',
      },
    ];

    const defaultLabels = {
      slResultsHeading: 'Store locator',
      slResultsSubHeading1: 'Showing nearest',
      slResultsSubHeading2: 'resuts for',
      slStoreDetailBtnLabel: 'View store details',
    };

    StoreListComponent = render(
      <ThemeProvider>
        <LabelContext.Provider value={defaultLabels}>
          {/* <StoreList data={data}/> */}
        </LabelContext.Provider>
      </ThemeProvider>,
    );
  });

  it('should render store basic details correctly', () => {
    const { asFragment } = StoreListComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
