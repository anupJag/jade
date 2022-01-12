// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Children, cloneElement, ReactElement, useCallback, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { debounce } from 'throttle-debounce';
import { addToCartVarsFn, MUTATE_ADD_TO_CART } from '@jade/graphql-client';
import { Context as GlobalContext } from '@jade/store';
import { CartContext, notifyCartUpdate } from '@jade/ui/organism';
import { getCookie } from '@jade/utils';

interface ProductDetail {
  productId: any;
  quantity: number;
}

const cartDetails = () => {
  const {
    state: { user },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useContext(GlobalContext);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { dispatch } = useContext(CartContext);

  // eslint-disable-next-line
  let callback = (args: any) => {};

  const onCompleted = (cb: any) => (callback = cb);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [muate, { data }] = useMutation(MUTATE_ADD_TO_CART, {
    onCompleted: (...args) => {
      callback(...args);
      notifyCartUpdate({ isCartUpdated: true }, dispatch);
    },
  });

  const debounceFunc = debounce(1000, ({ productId, quantity }: ProductDetail) => {
    const userIdCookie = getCookie(document.cookie, 'userId');
    const addToCartDetails = addToCartVarsFn({
      addedBy: userIdCookie || '',
      productId,
      quantity,
    });

    muate({ variables: addToCartDetails });
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addToCart = useCallback(debounceFunc, []);

  return { addToCart, data, onCompleted };
};

export const AddToCart = (props: any) => {
  //TODO : const query = props.quuery;
  const { addToCart, onCompleted, data } = cartDetails();

  const cloneChildEl = () => {
    const addToCartEl: ReactElement | any = Children.only(props.children);
    const clonedEl: ReactElement | null = addToCartEl
      ? cloneElement(addToCartEl, {
          addToCart,
          onCompleted,
          data,
        })
      : null;
    return clonedEl;
  };

  return cloneChildEl();
};
