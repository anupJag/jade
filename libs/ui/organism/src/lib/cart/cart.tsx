import React, { FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Context as GlobalContext } from '@jade/store';
import { CartContext, notifyCartUpdate } from './context';
import {
  deleteFromCartVarFn,
  getCartDetailsVarFn,
  MUTATE_DELETE_FROM_CART,
  QUERY_CART_DETAILS,
} from './queries';
import { CartDrawer } from '@jade/ui/molecules';

interface Func {
  (arg: any): any;
}

interface Props {
  isOpen: boolean;
  onClose: Func;
  onCountChange?: Func;
}
/**
 * Component : Cart
 *
 * @param {Props} props
 * @returns
 */
export const Cart: FC<Props> = (props: Props) => {
  // context : return : user details
  const {
    state: { user },
  } = useContext(GlobalContext);

  const prevCount = useRef(0);

  // contenxt : if cart is added / updated, isCartupdated flag will be used to update cart list
  const {
    state: { isCartUpdated },
    dispatch,
  } = useContext(CartContext);

  const userId = user?.id || '';
  const variables = getCartDetailsVarFn({ userId });

  /**
   * Query :Cart list from DB
   * skip querying : if userId is not available
   *
   */
  const { data = [], loading, refetch }: any = useQuery(QUERY_CART_DETAILS, {
    variables,
    skip: !userId,
  });

  // Avoid scope issue
  const iniRefetch = () => refetch();

  /**
   * Refecth data from DB,
   * Reset isCartUpdate flag in store
   *
   * refecth will be initiated only {isCartUpdated : true, isOpen : true }
   * else cached data used
   *
   */
  useEffect(() => {
    if (isCartUpdated) {
      iniRefetch();
      notifyCartUpdate({ isCartUpdated: false }, dispatch);
    }
  }, [isCartUpdated]);

  /**
   * Delete cart item :
   *
   * onSuccess of Delete operation : refect will be called to update list
   */
  const [mutate] = useMutation(MUTATE_DELETE_FROM_CART, {
    onCompleted: iniRefetch,
  });

  /**
   * A callback function to get information about a cart & to initiate deletion to server
   *
   */
  const deleteFnc = useCallback(
    ({ id }) => {
      const variables = deleteFromCartVarFn({
        id: id,
        addedBy: userId,
      });
      mutate({ variables });
    },
    [user],
  );

  const cart = data?.cart?.bag ?? [];

  if (prevCount.current !== data?.cart?.bag.length) {
    const count = cart.length || 0;
    props.onCountChange(count);
    prevCount.current = count;
  }

  return <CartDrawer {...props} data={cart} loading={loading} onDelete={deleteFnc} />;
};
