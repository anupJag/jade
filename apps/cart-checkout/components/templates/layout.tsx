import React, { FC } from 'react';
import * as S from './layout.styled';
import { Logo } from '@jade/ui/molecules';
import CheckoutStepper from '../molecules/checkout-stepper/checkout-stepper';
import { Footer } from '@jade/ui/organism';
import { Container, SkipLink, Box, Text, Flex } from '@jade/ui/atoms';
import { useTheme } from '@jade/ui/themes';

/* eslint-disable-next-line */
type Props = {
  slug: string;
};

const Layout: FC<Props> = ({ children, slug }) => {
  const theme: any = useTheme();
  return (
    <>
      <SkipLink />
      <S.Main>
        <Box borderBottom={`1px solid ${theme.colors.gray[200]}`} pb="1rem" pt="1rem">
          <Container>
            <Flex justify="space-between" align="center">
              <Box w="100px">
                <Logo />
              </Box>
              <Text>Secure Checkout</Text>
            </Flex>
          </Container>
        </Box>
      </S.Main>
      <S.Main>
        <Box borderBottom={`1px solid ${theme.colors.gray[200]}`}>
          <Container>
            <CheckoutStepper slug={slug} />
          </Container>
        </Box>
      </S.Main>
      <S.Main id="main-content" role="main" bg={theme.themeColors.background.cartSection}>
        <Container>{children}</Container>
      </S.Main>
      <Footer />
    </>
  );
};
export default Layout;
