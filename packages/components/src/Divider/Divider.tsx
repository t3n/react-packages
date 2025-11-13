/* eslint-disable no-nested-ternary */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { MarginProps, variant, WidthProps } from 'styled-system';

import { getThemeColor } from '@t3n/theme';

import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';

export type DividerVariants = 'primary' | 'inverse';

export interface DividerProps extends WidthProps, MarginProps {
  variant?: DividerVariants;
  iconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: ReactNode;
}

const StyledBox = styled(Box)<Omit<DividerProps, 'children'>>`
  ${variant({
    variants: {
      primary: {
        color: 'text.primary',
      },
      inverse: {
        color: 'text.inverse',
      },
    },
  })}
`;

const StyledLine = styled.span<Pick<DividerProps, 'variant'>>`
  height: 1px;
  flex-grow: 1;
  opacity: 0.6;

  ${variant({
    variants: {
      primary: {
        bg: 'text.primary',
      },
      inverse: {
        bg: 'text.inverse',
      },
    },
  })}
`;

const StyledIcon = styled(Icon)<Pick<DividerProps, 'variant'>>`
  fill: ${({ theme, variant: variantProp }) =>
    getThemeColor(variantProp === 'inverse' ? 'text.inverse' : 'text.primary')({
      theme,
    })};
`;

const Divider = ({
  children,
  variant: variantProp = 'primary',
  iconComponent,
  my = 3,
  ...rest
}: DividerProps) => (
  <StyledBox
    display="flex"
    alignItems="center"
    variant={variantProp}
    my={my}
    {...rest}
  >
    <StyledLine variant={variantProp} />
    {children ? (
      <Text small mx={2} my={0}>
        {children}
      </Text>
    ) : iconComponent ? (
      <StyledIcon variant={variantProp} component={iconComponent} mx={2} />
    ) : null}
    {(children || iconComponent) && <StyledLine variant={variantProp} />}
  </StyledBox>
);

export default Divider;
