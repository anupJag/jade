import React from 'react';
// TODO: Fix @material-ui
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { green } from '@material-ui/core/colors';
import { Box, useDisclosure } from '@jade/ui/atoms';
import { Header } from './header';
import { Cart, AppSearch } from '@jade/ui/organism';
import { AuthNavigation } from '../AuthNavigation';

export const AppHeader = () => {
  const [cartCount, setCartCount] = React.useState(0);
  const fetchCartCount = count => {
    setCartCount(count);
  };
  const { isOpen: cartIsOpen, onOpen: cartOnOpen, onClose: cartOnClose } = useDisclosure();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Header>
      <>
        <Box d="flex" flex="1 1 auto" flexDirection="column" ml="20">
          <AppSearch />
        </Box>
        <Box d="flex" flex="1 1 auto" flexDirection="column" ml="20">
          <AuthNavigation />
        </Box>
        <Box d="flex" flex="auto" justifyContent="flex-end" cursor="pointer">
          <IconButton aria-label="cart" onClick={cartOnOpen}>
            <Badge badgeContent={cartCount} color="secondary" invisible={cartCount < 1}>
              <ShoppingCartOutlinedIcon style={{ color: green[500] }} />
            </Badge>
          </IconButton>
          <Cart onClose={cartOnClose} isOpen={cartIsOpen} onCountChange={fetchCartCount} />
        </Box>
      </>
    </Header>
  );
};
