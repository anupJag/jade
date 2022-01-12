import React, { FC, useEffect, useRef } from 'react';
import { StyledSlide } from './slide.styled';
// TODO: fix SlideProps
import { SlideProps } from '../../index';

export const Slide: FC<SlideProps> = ({ children, isActive, isFocused }) => {
  const slideEl = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (slideEl && slideEl.current !== null) {
      slideEl.current.querySelectorAll('a, button, input').forEach((element: Element) => {
        element.setAttribute('tabindex', isActive ? '0' : '-1');
      });
    }
  }, [isActive]);

  useEffect(() => {
    if (isFocused && slideEl && slideEl.current !== null) {
      slideEl.current.focus({
        preventScroll: true,
      });
    }
  }, [isFocused]);

  const accessibilityProps = isActive
    ? {
        tabIndex: 0,
      }
    : {
        'aria-hidden': true,
        tabIndex: -1,
      };
  return (
    <StyledSlide ref={slideEl} {...accessibilityProps}>
      {children}
    </StyledSlide>
  );
};
