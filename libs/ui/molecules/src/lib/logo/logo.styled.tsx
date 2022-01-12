import { css } from '@emotion/core';
import { styled } from '@jade/ui/themes';
import { accessibility } from '@jade/ui/utils';

export const LogoLink = styled.a`
  display: flex;
  cursor: pointer;
  svg {
    height: ${props => props.theme.space[12]};
    ${props => css`
      ${props.theme.mediaQueries.md} {
        height: ${props.theme.space[8]};
      }
    `}
  }
`;

export const HiddenSpan = styled.span`
  ${accessibility.srOnly()}
`;
