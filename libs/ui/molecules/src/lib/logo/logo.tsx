import React from 'react';
import { Link } from '@jade/ui/atoms';
import * as S from './logo.styled';
import { ReactComponent as LogoSvg } from './logo.svg';

export const Logo = () => (
  <div>
    <Link href="/">
      <S.LogoLink title="Go to homepage">
        <LogoSvg aria-hidden="true" />
        <S.HiddenSpan>Go to homepage</S.HiddenSpan>
      </S.LogoLink>
    </Link>
  </div>
);
