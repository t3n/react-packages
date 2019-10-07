import React from 'react';
import styled from 'styled-components';
import { space, border, variant, ColorProps } from 'styled-system';
import { MaterialCheck } from '@t3n/icons';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

type VariantType = 'light' | 'dark';

export interface VariantProps {
  variant?: VariantType;
}

export interface StyledCheckboxProps extends ColorProps, VariantProps {
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  feedbackColor?: ThemeFeedbackColor;
}

export interface CheckboxProps extends StyledCheckboxProps {
  name: string;
  checked: boolean;
  value: any;
}

const CheckboxContainer = styled(Box)<StyledCheckboxProps>`
  position: relative;
  display: inline-block;
  ${() => space({ mr: 2 })}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 1rem;
  height: 1rem;
  opacity: 0;
  ${() => space({ my: 0, mr: 2, ml: 0 })}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledCheckbox = styled(Box)<Omit<CheckboxProps, 'name' | 'value'>>`
  display: inline-block;
  position: relative;
  line-height: 1;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  pointer-events: none;
  transition: all 0.1s ease-in-out;

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
    ${({ theme }: StyledCheckboxProps & ThemeProps) =>
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
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

const StyledLabel = styled.label<StyledCheckboxProps>`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
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
    <CheckboxContainer>
      <HiddenCheckbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
      />
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
      </StyledCheckbox>
    </CheckboxContainer>
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
    <>
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
        <Text small inline>
          {label}
        </Text>
      </StyledLabel>
    </>
  );
};
