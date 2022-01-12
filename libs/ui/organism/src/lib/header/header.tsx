import React, { useContext } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@jade/ui/atoms';
import { Heading } from '@jade/ui/atoms';
import { Logo } from '@jade/ui/molecules';
import { Navigation } from '@jade/ui/organism';
import { DrawerNavigation } from '@jade/ui/organism';
import { Context as GlobalContext } from '@jade/store';

import * as S from './header.styled';

export const Header = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { state } = useContext(GlobalContext);
  let { label } = state;
  label = label || { offersLabel: 'Offers' }; // this can be written a lot better

  return (
    <S.Header>
      <S.HeaderRow>
        <S.HeaderUI1>
          <S.CompWrapper>
            <Logo />
          </S.CompWrapper>
          <S.CompWrapper>
            <Navigation drawerHandler={onOpen} labels={label} />
            <Drawer
              onClose={onClose}
              isOpen={isOpen}
              placement="left"
              size="sm"
              scrollBehavior="inside"
              isFullHeight={true}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Heading tagName="h2">Categories</Heading>
                </DrawerHeader>
                <DrawerBody>
                  <DrawerNavigation />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </S.CompWrapper>
          {props.children}
        </S.HeaderUI1>
      </S.HeaderRow>
    </S.Header>
  );
};
