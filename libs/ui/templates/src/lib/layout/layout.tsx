import React, { FC } from 'react';
import { AppHeader } from '@jade/ui/organism';
import { Footer } from '@jade/ui/organism';
import { SkipLink } from '@jade/ui/atoms';

import * as S from './layout.styled';

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <SkipLink />
      <AppHeader />
      <S.Main id="main-content" role="main">
        {children}
      </S.Main>
      <Footer />
    </div>
  );
};
