import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';

import { BasketItem } from './BasketItem';
import { MUTATE_ADD_TO_CART } from '@jade/graphql-client';

// import { AddToCart } from '@jade/ui/molecules';
jest.mock('@jade/ui/molecules/AddToCart', () => {
  return React.createElement('input', { a: 1 });
});

describe('BasketItem', () => {
  it('should render successfully', () => {
    const basketItemData = {
      itemTotal: 12,
      productId: '123',
      quantity: 1,
      product: {
        id: 'SKU-8894977',
        images: [
          {
            altText: 'Quia.',
            isDefault: true,
            url: 'https://source.unsplash.com/640x480/?electronics',
          },
        ],
        pricing: {
          list: 722.41,
          retail: 731.99,
        },
        productUrl: '/p/SKU-8894977',
        title: 'electronics - Veniam voluptas quibusdam.',
      },
    };
    const mocks = [
      {
        request: {
          query: MUTATE_ADD_TO_CART,
          variables: {
            addedBy: '1',
            productId: '1',
            quantity: 1,
          },
        },
        result: {
          data: {
            dog: { id: '1', name: 'Buck', breed: 'bulldog' },
          },
        },
      },
    ];

    const { baseElement } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BasketItem data={basketItemData} />
      </MockedProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
