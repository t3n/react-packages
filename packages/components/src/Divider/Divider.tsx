import React from 'react';
import styled from 'styled-components';
import { variant, WidthProps } from 'styled-system';
import { theme } from '@t3n/theme';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

export type DividerVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';

export interface DividerProps extends WidthProps {
  variant?: DividerVariants;
}

const StyledBox = styled(Box)<DividerProps>`
  ${() =>
    variant({
      variants: {
        primary: {
          color: theme.colors.text.primary
        },
        secondary: {
          color: theme.colors.text.secondary
        },
        inverse: {
          color: theme.colors.text.inverse
        },
        highlight: {
          color: theme.colors.text.highlight
        }
      }
    })}
`;

const StyledLine = styled.span<Pick<DividerProps, 'variant'>>`
  height: 1px;
  background: black;
  flex-grow: 1;

  ${() =>
    variant({
      variants: {
        primary: {
          bg: theme.colors.text.primary
        },
        secondary: {
          bg: theme.colors.text.secondary
        },
        inverse: {
          bg: theme.colors.text.inverse
        },
        highlight: {
          bg: theme.colors.text.highlight
        }
      }
    })}
`;

export const Divider: React.FC<DividerProps> = ({
  children,
  variant: variantProp,
  width
}) => {
  return (
    <StyledBox
      display="flex"
      alignItems="center"
      width={width}
      variant={variantProp}
    >
      <StyledLine variant={variantProp} />
      {children && (
        <Text small mx={2} my={0}>
          {children}
        </Text>
      )}
      {children && <StyledLine variant={variantProp} />}
    </StyledBox>
  );
};

Divider.defaultProps = {
  width: 1,
  variant: 'primary'
};
