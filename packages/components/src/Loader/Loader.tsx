import React from 'react';
import styled from 'styled-components';
import { color, size, BackgroundColorProps, space, MarginProps } from 'styled-system';

export interface LoaderProps extends MarginProps {
  small?: boolean;
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
    ${({ small }) => size({ size: small ? '0.5rem' : '1rem' })};

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

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
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

export const Loader = styled(({ small, color: bg, ...marginProps }: LoaderProps) => (
  <LoaderWrapper small={small} bg={bg}, {...marginProps}>
    <div />
    <div />
    <div />
  </LoaderWrapper>
))``;

Loader.defaultProps = {
  color: 'background.secondary'
};
