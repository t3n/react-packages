import React from 'react';
import styled from 'styled-components';
import { color, size, SizeProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';

export type LoaderVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';

export interface LoaderProps extends SizeProps {
  backgroundColor?: ThemeBackgroundColor;
  bg?: ThemeBackgroundColor;
  small?: boolean;
}

const backgroundColor = ({
  backgroundColor: backgroundColorProps,
  bg,
  theme
}: LoaderProps & ThemeProps) =>
  color({ backgroundColor: `background.${backgroundColorProps || bg}`, theme });

const loaderSize = ({ small }: LoaderProps & ThemeProps) =>
  size({ size: small ? '0.5rem' : '1rem' });

const LoaderWrapper = styled.div<LoaderProps>`
  display: inline-block;
  text-align: center;

  > div {
    ${loaderSize}
    ${backgroundColor}

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  > div:nth-child(1) {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
  > div:nth-child(2) {
    -webkit-animation-delay: -0.15s;
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

export const Loader = styled((props: LoaderProps) => (
  <LoaderWrapper {...props}>
    <div />
    <div />
    <div />
  </LoaderWrapper>
))``;

Loader.defaultProps = {
  backgroundColor: 'secondary'
};
