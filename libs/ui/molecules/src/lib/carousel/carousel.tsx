import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Flex } from '@jade/ui/atoms';

import {
  DotControl,
  Slider,
  StyledDot,
  StyledDotsContainer,
  StyledIconButton,
  StyledSlide,
  Track,
} from './carousel.styled';

type CarouselProps = {
  slidesToShow?: number;
  showDots?: boolean;
  showArrow?: boolean;
  children: React.ReactNode;
};

type SlideProps = {
  children: React.ReactNode;
  isActive: boolean;
  isFocused: boolean;
};

type DotsProps = {
  slideCount: number;
  onSlideClick: (value: number) => void;
};

const Dots: FunctionComponent<DotsProps> = ({ slideCount, onSlideClick }) => {
  const dotsArray = Array.from(new Array(slideCount));
  return (
    <StyledDotsContainer>
      <Flex as="ul">
        {dotsArray.map((key, index) => {
          return (
            <StyledDot key={`dot_${index}`}>
              <DotControl
                onClick={() => onSlideClick(index)}
                aria-label={`item ${index + 1} of ${slideCount}`}>
                {' '}
              </DotControl>
            </StyledDot>
          );
        })}
      </Flex>
    </StyledDotsContainer>
  );
};

const Slide: FunctionComponent<SlideProps> = ({ children, isActive, isFocused }) => {
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

  const accessbilityProps = isActive
    ? {
        tabIndex: 0,
      }
    : {
        'aria-hidden': true,
        tabIndex: -1,
      };
  return (
    <StyledSlide ref={slideEl} {...accessbilityProps}>
      {children}
    </StyledSlide>
  );
};

export const Carousel: FunctionComponent<CarouselProps> = ({
  children,
  slidesToShow = 1,
  showDots = true,
  showArrow = true,
}) => {
  const slideCount = React.Children.count(children);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const onPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setFocusedIndex(currentSlide - 1);
    }
  };

  const onNext = () => {
    if (currentSlide + slidesToShow - 1 < slideCount - 1) {
      setCurrentSlide(currentSlide + 1);
      setFocusedIndex(currentSlide + slidesToShow);
    }
  };

  const setSlide = (index: number) => {
    if (index + slidesToShow < slideCount) {
      setCurrentSlide(index);
    } else {
      setCurrentSlide(slideCount - slidesToShow);
    }
    setFocusedIndex(index);
  };

  return (
    <Slider>
      {showArrow && (
        <StyledIconButton aria-label="prev" icon="chevron-left" variation="prev" onClick={onPrev} />
      )}
      <Track currentSlide={currentSlide} slideCount={slideCount} slidesToShow={slidesToShow}>
        {React.Children.map(children, (child, index) => {
          const isActive = index >= currentSlide && index < currentSlide + slidesToShow; // if slide is in viewport
          const isFocused = focusedIndex > -1 && focusedIndex === index; // if slide needs to be focused after next, prev slide click
          return (
            <Slide key={`slide_${index}`} isActive={isActive} isFocused={isFocused}>
              {child}
            </Slide>
          );
        })}
      </Track>
      {showArrow && (
        <StyledIconButton
          aria-label="next"
          icon="chevron-right"
          variation="next"
          onClick={onNext}
        />
      )}
      {showDots && <Dots slideCount={slideCount} onSlideClick={setSlide} />}
    </Slider>
  );
};
