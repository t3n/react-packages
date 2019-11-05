import React from 'react';
import styled from 'styled-components';
import { variant, WidthProps, MarginProps } from 'styled-system';
import { getThemeColor } from '@t3n/theme';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Icon } from '../Icon';

export type DividerVariants = 'primary' | 'inverse';

export interface DividerProps extends WidthProps, MarginProps {
  variant?: DividerVariants;
  iconComponent?: React.FunctionComponent<React.SVGProps<SVGElement>>;
  children?: string;
}

const StyledBox = styled(Box)<Omit<DividerProps, 'children'>>`
  ${variant({
    variants: {
      primary: {
        color: 'text.primary'
      },
      inverse: {
        color: 'text.inverse'
      }
    }
  })}
`;

const StyledLine = styled.span<Pick<DividerProps, 'variant'>>`
  height: 1px;
  flex-grow: 1;
  opacity: 0.6;

  ${variant({
    variants: {
      primary: {
        bg: 'text.primary'
      },
      inverse: {
        bg: 'text.inverse'
      }
    }
  })}
`;

const StyledIcon = styled(Icon)<Pick<DividerProps, 'variant'>>`
  fill: ${({ theme, variant: variantProp }) =>
    getThemeColor(variantProp === 'inverse' ? 'text.inverse' : 'text.primary')({
      theme
    })};
`;

export const Divider: React.FC<DividerProps> = ({
  children,
  variant: variantProp,
  width,
  iconComponent
}) => {
  return (
    <StyledBox
      display="flex"
      alignItems="center"
      width={width}
      variant={variantProp}
      my={3}
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
};

Divider.defaultProps = {
  width: 1,
  variant: 'primary'
};
