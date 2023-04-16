'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css, keyframes } from 'styled-components';
import useAnimated from '../hooks/useAnimated';

const theAnimation = keyframes`
  0% {
    opacity: 0;
    right: 40px;
  }
  100% {
    opacity: 1;
    right: 0;
  }
`;

const Animated = styled.div<{ doAnimation?: boolean; }>`
  position: relative;
  ${({ doAnimation }) => doAnimation && css`
    animation: ${theAnimation} ease-in 1s;
  `};
`;

const AnimatedComponent = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const { ref, isVisible } = useAnimated();

    return (
      <Animated ref={ref} doAnimation={isVisible}>
        { children }
      </Animated>
    );
}

export default AnimatedComponent;