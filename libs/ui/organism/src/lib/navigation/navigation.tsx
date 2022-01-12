import React, { FC } from 'react';
import { GlobalLabel } from '@jade/ui/molecules';
import { NavigationProps } from './navigation.type';
import * as S from './navigation.styled';
import { HyperLink } from '@jade/ui/atoms';

export const Navigation: FC<NavigationProps> = ({ drawerHandler }) => {
  return (
    <S.Nav>
      <S.NavList>
        <S.NavItem>
          <HyperLink
            onClick={e => {
              e.preventDefault();
              drawerHandler();
            }}
            href="/categories"
            type="PrimaryNav"
            title="Categories"
            hasSubnav={true}>
            Categories
          </HyperLink>
        </S.NavItem>
        <S.NavItem>
          <HyperLink href="/offers" type="PrimaryNav" title="Offers" hasSubnav={false}>
            <GlobalLabel path="offersLabel" />
          </HyperLink>
        </S.NavItem>
        <S.NavItem>
          <HyperLink href="/help/faq" type="PrimaryNav" title="Help" hasSubnav={false}>
            Help
          </HyperLink>
        </S.NavItem>
      </S.NavList>
    </S.Nav>
  );
};
