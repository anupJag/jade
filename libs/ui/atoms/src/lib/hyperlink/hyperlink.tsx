import React, { FC, MouseEventHandler } from 'react';
import { Icon } from '@jade/ui/atoms';
import * as S from './hyperlink.styled';

export type LinkProps = {
  href: string;
  type: 'PrimaryNav' | 'SecondaryNav';
  title?: string;
  target?: string;
  hasSubnav?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
};

export const HyperLink: FC<LinkProps> = ({
  href,
  type,
  title,
  target,
  children,
  className,
  hasSubnav = false,
  onClick,
}) => {
  let LinkComp = S.PrimaryNavLink;
  LinkComp = type === 'SecondaryNav' ? S.SecondaryNavLink : LinkComp;
  return (
    <LinkComp className={className} onClick={onClick} href={href} target={target} title={title}>
      {children} {hasSubnav ? <Icon name="chevron-down" aria-hidden="true" /> : null}
    </LinkComp>
  );
};
