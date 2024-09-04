import React from 'react';
import styled from 'styled-components';
import {
  BackgroundColorProps,
  color,
  MarginProps,
  size,
  space,
} from 'styled-system';

export interface LoaderProps extends MarginProps {
  small?: boolean;
  loaderSize?: string;
  color?: BackgroundColorProps['bg'];
}

const LoaderWrapper = styled.span<
  LoaderProps & { bg: BackgroundColorProps['bg'] }
>`
  display: inline-flex;
  text-align: center;
  ${space}

  > div {
    ${color};
    ${({ small, loaderSize }) =>
      size({ size: loaderSize || (small ? '0.5rem' : '1rem') })};

    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  > div:nth-child(1) {
    animation-delay: -0.3s;
  }
  > div:nth-child(2) {
    animation-delay: -0.15s;
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const Loader = styled(
  ({
    small,
    loaderSize,
    color: bg = 'background.secondary',
    ...marginProps
  }: LoaderProps) => (
    <LoaderWrapper
      small={small}
      loaderSize={loaderSize}
      bg={bg}
      {...marginProps}
    >
      <div />
      <div />
      <div />
    </LoaderWrapper>
  ),
)``;

export default Loader;
