import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';

interface LoaderWrapperProps {
  backgroundColor?: ThemeBackgroundColor;
  bg?: ThemeBackgroundColor;
}

const backgroundColor = ({
  backgroundColor,
  bg,
  theme
}: LoaderWrapperProps & ThemeProps) =>
  color({ backgroundColor: `background.${backgroundColor || bg}`, theme });

const LoaderWrapper = styled.div<LoaderWrapperProps>`
  width: 3rem;
  text-align: center;

  > div {
    width: 1rem;
    height: 1rem;
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

export const Loader = (props: LoaderWrapperProps) => {
  return (
    <LoaderWrapper {...props}>
      <div />
      <div />
      <div />
    </LoaderWrapper>
  );
};

Loader.defaultProps = {
  backgroundColor: 'secondary'
};
