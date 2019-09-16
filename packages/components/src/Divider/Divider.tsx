import React from 'react';
import styled from 'styled-components';
import { BackgroundColorProps, variant } from 'styled-system';
import { theme } from '@t3n/theme';
import { Box, BoxProps } from '../Box/Box';

export type DividerVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';

interface DividerProps extends Pick<BoxProps, 'width'>, BackgroundColorProps {}

const bgVariants = Object.keys(theme.colors.text).reduce(
  (colors, colorName) => ({
    ...colors,
    [colorName]: {
      bg: `text.${colorName}`
    }
  }),
  {}
);

const StyledBox = styled(Box)`
  border: none;

  ${variant({
    prop: 'bg',
    variants: bgVariants
  })}

  ${variant({
    prop: 'backgroundColor',
    variants: bgVariants
  })}
`;

export const Divider = (props: DividerProps) => {
  return <StyledBox {...props} as="hr" height="2px" />;
};

Divider.defaultProps = {
  backgroundColor: 'secondary',
  width: 1
};
