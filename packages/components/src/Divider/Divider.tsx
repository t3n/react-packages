import React from 'react';
import styled from 'styled-components';
import { BackgroundColorProps, variant, SizeProps } from 'styled-system';
import { theme } from '@t3n/theme';
import { Box } from '../Box/Box';

export type DividerVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';

export interface DividerProps extends SizeProps, BackgroundColorProps {}

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
  return <StyledBox {...props} as="hr" />;
};

Divider.defaultProps = {
  backgroundColor: 'secondary',
  width: 1,
  height: '2px'
};
