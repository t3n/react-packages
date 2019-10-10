import React from 'react';
import styled from 'styled-components';
import { space, border, variant } from 'styled-system';
import { MaterialCheck } from '@t3n/icons';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

type VariantType = 'light' | 'dark';

export interface CheckboxProps {
  name: string;
  value: any;
  checked: boolean;
  label?: string;
  disabled?: boolean;
  variant?: VariantType;
  feedbackColor?: ThemeFeedbackColor;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<CheckboxProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledCheckbox = styled(Box)<Omit<CheckboxProps, 'name' | 'value'>>`
  display: inline-block;
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  vertical-align: middle;
  transition: all 0.1s ease-in-out;
  ${({ theme }) => space({ mr: 1, theme })}

  ${({ theme, checked, disabled, feedbackColor }) =>
    variant({
      variants: {
        light: {
          bg:
            checked && disabled
              ? 'shades.grey143'
              : checked && feedbackColor
              ? 'shades.white'
              : checked
              ? 'shades.grey42'
              : 'shades.white',
          border: '1px solid',
          borderColor: feedbackColor
            ? theme.colors.feedback[feedbackColor]
            : checked && disabled
            ? theme.colors.shades.grey143
            : checked
            ? theme.colors.shades.grey42
            : theme.colors.shades.grey143
        },
        dark: {
          bg:
            checked && disabled
              ? 'shades.grey143'
              : checked && feedbackColor
              ? 'shades.grey44'
              : checked
              ? 'shades.white'
              : 'shades.grey44',
          border: '1px solid',
          borderColor: feedbackColor
            ? theme.colors.feedback[feedbackColor]
            : checked && disabled
            ? theme.colors.shades.grey143
            : checked
            ? theme.colors.shades.white
            : theme.colors.shades.grey242
        }
      }
    })}

  &:focus,
  &:active {
    ${({ theme }: ThemeProps) =>
      border({
        theme,
        border: '1px solid',
        borderColor: theme.colors.shades.grey42
      })};
  }
`;

const StyledIcon = styled.span<
  Omit<CheckboxProps, 'name' | 'value'> & ThemeProps
>`
  position: absolute;
  top: -1px;
  left: -1px;
  transition: all 0.1s ease-in-out;
  pointer-events: none;
  transform: scale(${({ checked }) => (checked ? 1 : 0)});
  opacity: ${({ checked }) => (checked ? 1 : 0)};

  svg {
    ${({ theme, feedbackColor }) =>
      variant({
        variants: {
          light: {
            fill: feedbackColor
              ? theme.colors.feedback[feedbackColor]
              : theme.colors.shades.white
          },
          dark: {
            fill: feedbackColor
              ? theme.colors.feedback[feedbackColor]
              : theme.colors.shades.grey44
          }
        }
      })}
  }
`;

const StyledLabel = styled.label<
  Omit<CheckboxProps, 'name' | 'value' | 'checked'>
>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ disabled }) =>
    variant({
      variants: {
        light: {
          color: disabled ? 'shades.grey143' : 'black'
        },
        dark: {
          color: disabled ? 'shades.grey143' : 'white'
        }
      }
    })}

  ${Text} {
    line-height: 0;
    vertical-align: middle;
  }
`;

const PlainCheckbox = ({
  checked,
  onChange,
  disabled,
  feedbackColor,
  name,
  variant: variantProp,
  value
}: CheckboxProps) => {
  return (
    <StyledCheckbox
      variant={variantProp}
      checked={checked}
      disabled={disabled}
      feedbackColor={feedbackColor}
    >
      <StyledIcon
        variant={variantProp}
        checked={checked}
        feedbackColor={feedbackColor}
      >
        <MaterialCheck />
      </StyledIcon>
      <HiddenCheckbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
      />
    </StyledCheckbox>
  );
};

export const Checkbox = ({
  checked,
  onChange,
  label,
  disabled,
  feedbackColor,
  name,
  value,
  variant: variantProp
}: CheckboxProps) => {
  return (
    <StyledLabel disabled={disabled} variant={variantProp}>
      <PlainCheckbox
        variant={variantProp}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        feedbackColor={feedbackColor}
        name={name}
        value={value}
      />
      {label && (
        <Text small inline>
          {label}
        </Text>
      )}
    </StyledLabel>
  );
};
