import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Spinner,
} from '@jade/ui/atoms';
// TODO: Refactor 'react-icons/fa'
import { FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';
import { HyperLink } from '@jade/ui/atoms';

import { CartList } from '@jade/ui/molecules';
import { FooterButton, FooterButtonContainer } from './cart-drawer.styled';

const Loading = () => (
  <Box d="flex" mt="10" justifyContent="center">
    <Spinner thickness="2px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
  </Box>
);

export const CartDrawer = ({
  data = [],
  loading = false,
  onDelete,
  onClose,
  isOpen,
  size = 'md',
  placement = 'right',
}: any) => {
  return (
    <Drawer
      onClose={onClose}
      isOpen={isOpen}
      size={size}
      placement={placement}
      scrollBehavior="inside"
      isFullHeight={true}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          d="flex"
          justifyContent="center"
          color="green.500"
          letterSpacing="wide"
          textTransform="capitalize"
          fontWeight="bold">
          {' '}
          Cart Items
        </DrawerHeader>
        <DrawerBody>
          <FooterButtonContainer>
            <FooterButton leftIcon={FaShoppingCart} variantColor="pink">
              Checkout
            </FooterButton>
            <FooterButton leftIcon={FaShoppingBasket} variantColor="green">
              <HyperLink
                href="/cart/review-basket"
                type="SecondaryNav"
                title="View Full Basket"
                hasSubnav={false}>
                {'View Full Basket'}
              </HyperLink>
            </FooterButton>
          </FooterButtonContainer>
          <Box overflow="hidden">{loading ? <Loading /> : <CartList data={data} />}</Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
