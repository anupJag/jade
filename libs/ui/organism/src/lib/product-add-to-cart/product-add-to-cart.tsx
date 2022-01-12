import React, { FC, useCallback, useContext, useRef, useState, useEffect } from 'react';
import { QuantitySelector } from '@jade/ui/molecules';
import { StyledButton } from './product-add-to-cart.styled';
import { useMutation } from '@apollo/react-hooks';
import { Context as GlobalContext } from '@jade/store';
import { CartContext, notifyCartUpdate } from '../cart/context';
import {
  addToCartVarsFn,
  MUTATE_ADD_TO_CART,
  getCartDetailsVarFn,
  QUERY_CART_DETAILS,
} from '@jade/graphql-client';
import { getCookie } from '@jade/utils';
import { HyperLink } from '@jade/ui/atoms';

type Props = {
  product?: any;
  addToCart?: any;
};

export const ProductAddToCart: FC<Props> = ({ product }) => {
  const [userInfo, setUserInfo] = useState('');
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const cookie = document.cookie;
    const userIdCookie = getCookie(cookie, 'userId');
    setUserInfo(userIdCookie);
  }, []);

  const {
    state: { user },
  } = useContext(GlobalContext);

  const prevCount = useRef(0);

  const [qty, setQty] = useState(0);
  /**
   * Delete cart item :
   *
   * onSuccess of Delete operation : refect will be called to update list
   */
  const [mutate] = useMutation(MUTATE_ADD_TO_CART, {
    onCompleted: res => {
      const quantityVal = (res && res.addToCart && res.addToCart.quantity) || 0;
      setQty(quantityVal);
      notifyCartUpdate({ isCartUpdated: true }, dispatch);
    },
  });

  /**
   * A callback function to get information about a cart & to initiate deletion to server
   *
   */

  const addToBagFunc = useCallback(
    quantity => {
      const variables = addToCartVarsFn({
        addedBy: userInfo || user?.id,
        productId: product.sku,
        quantity,
      });
      mutate({ variables });
    },
    [user],
  );

  if (qty > 0) {
    return (
      <QuantitySelector
        quantity={qty}
        label={`${qty} in cart`}
        min={0}
        max={50}
        onQuantityChange={value => addToBagFunc(Number(value))}
      />
    );
  }
  if (userInfo) {
    return (
      <StyledButton size="lg" onClick={() => addToBagFunc(1)}>
        {'Add to Cart'}
      </StyledButton>
    );
  }
  return (
    <HyperLink href="/signin" type="PrimaryNav" title="Signin" hasSubnav={false}>
      {'Login to Add Item to Cart'}
    </HyperLink>
  );
};

export default ProductAddToCart;
