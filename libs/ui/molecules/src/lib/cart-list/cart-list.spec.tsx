import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@jade/ui/themes';
import { ApolloProvider } from '@apollo/react-hooks';
import { initializeApollo } from '@jade/graphql-client';
import { CartList } from './cart-list';

describe('<CartList />', () => {
  let CartListComponent;
  const initApolloClient = initializeApollo();

  const onDelete = jest.fn();
  const data = [
    {
      id: 'test_1234',
      quantity: 10,
      product: {
        id: 'product_123',
        defaultImageUrl: '/product.jpg',
        defaultImageAlt: 'Product Alt',
        price: '120',
        title: 'Product Title',
      },
    },
  ];
  let container;
  let ListEl;

  beforeEach(() => {
    CartListComponent = render(
      <ApolloProvider client={initApolloClient}>
        <ThemeProvider>
          <CartList onDelete={onDelete} data={data} />
        </ThemeProvider>
      </ApolloProvider>,
    );

    ({ container } = CartListComponent);
  });

  /**
   * Capturing Sanpshot : CartList
   *
   *  To check style / structure changes in Styled Components
   */
  test('snapshot check', () => {
    const { asFragment } = CartListComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
