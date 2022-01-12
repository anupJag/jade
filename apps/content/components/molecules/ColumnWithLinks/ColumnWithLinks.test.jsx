import React from 'react';
import { ThemeProvider } from '@jade/ui/themes';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import ColumnWithLinks from './ColumnWithLinks';

const MOCK_DATA = [
  {
    header: 'Online Stores',
    links: [
      {
        href: 'https://www.jade.com/help/groceries-faq/?icid=Groceries_FAQ_Page',
        label: 'Groceries',
      },
      {
        href: 'https://secure.jade.com/clubcard/help/faqs/#my_clubcard_account',
        label: 'Clubcard',
      },
      {
        href: 'https://www.jademobile.com/coronavirus',
        label: 'jade Mobile',
      },
      {
        href: '/help/phones-faq/',
        label: 'SIM free and pay as you go mobile phone products',
      },
      { href: '/help/baby-club-faq/', label: 'jade Baby Club' },
      { href: '/help/direct-faq', label: 'jade Direct closure' },
      { href: '/help/wine-closure-faq', label: 'Wine by the Case closure' },
      {
        href: '/help/ues-closure-faq?icid=helppage_uesclosurefaqs_link',
        label: 'Uniform Embroidery Service closure',
      },
    ],
  },
  {
    header: 'Online Services',
    links: [
      { href: 'http://www.jade.com/productsupportjade', label: 'Product support' },
      {
        href: 'https://www.jadebank.com/online-banking/help/',
        label: 'jade Bank',
      },
    ],
  },
  {
    header: 'More Information',
    links: [
      { href: '/help/in-store-faq/', label: 'In-store FAQ' },
      {
        href: '/help/returns-policy/',
        label: 'Returns & refunds policy',
      },
      {
        href: '/help/petrol-stations/',
        label: 'Petrol station FAQ',
      },
      {
        label: 'Careers',
        href: 'http://www.jade-careers.com/',
      },
      {
        label: 'Corporate Information',
        href: 'http://www.jadeplc.com/',
      },
      {
        label: 'Investor relations',
        href: 'http://www.jadeplc.com/?pageid=7',
      },
      {
        label: 'Privacy & cookie policy',
        href: '/help/privacy-and-cookies/privacy-centre/privacy-policy-information/privacy-policy/',
      },
      {
        label: 'Store Locator',
        href: '/store-locator/uk/',
      },
      {
        label: 'Terms & conditions',
        href: '/help/terms-and-conditions/',
      },
    ],
  },
];

describe('COLUMN WITH LINKS', () => {
  test('should render without any error', () => {
    render(
      <ThemeProvider>
        <ColumnWithLinks data={[]} />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('column-links-wrapper')).toBeDefined();
  });

  test('should render correct number of columns as passed in props', () => {
    render(
      <ThemeProvider>
        <ColumnWithLinks data={MOCK_DATA} />
      </ThemeProvider>,
    );
    expect(screen.getAllByTestId('wrapper-columns').length).toBe(MOCK_DATA.length);
  });

  test('should render correct number of links for a column passed in props', () => {
    const fragmentedData = MOCK_DATA.filter((el, i) => i === 0);

    render(
      <ThemeProvider>
        <ColumnWithLinks data={fragmentedData} />
      </ThemeProvider>,
    );
    expect(screen.getAllByTestId('column-links').length).toBe(fragmentedData[0].links.length);
  });
});
