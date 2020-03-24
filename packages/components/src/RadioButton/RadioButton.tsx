import React from 'react';
import styled from 'styled-components';
import { space, border, variant } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

type VariantType = 'light' | 'dark';

export interface RadioButtonProps {
  name: string;
  value: any;
  checked: boolean;
  label?: string;
  disabled?: boolean;
  variant?: VariantType;
  feedbackColor?: ThemeFeedbackColor;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })<
  RadioButtonProps
>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledRadioButton = styled(Box)<Omit<RadioButtonProps, 'name' | 'value'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  ${({ theme }) => space({ mr: 2, theme })}

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
            : theme.colors.shades.grey143,
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
            : theme.colors.shades.grey242,
        },
      },
    })}

  &:focus,
  &:active {
    ${({ theme }: ThemeProps) =>
      border({
        theme,
        border: '1px solid',
        borderColor: theme.colors.shades.grey42,
      })};
  }
`;

const StyledRadioDot = styled.span<
  Omit<RadioButtonProps, 'name' | 'value'> & ThemeProps
>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  pointer-events: none;
  transform: scale(${({ checked }) => (checked ? 1 : 0)});
  opacity: ${({ checked }) => (checked ? 1 : 0)};

  ${({ theme, feedbackColor }) =>
    variant({
      variants: {
        light: {
          background: feedbackColor
            ? theme.colors.feedback[feedbackColor]
            : theme.colors.shades.white,
        },
        dark: {
          background: feedbackColor
            ? theme.colors.feedback[feedbackColor]
            : theme.colors.shades.grey42,
        },
      },
    })}
`;

const StyledLabel = styled.label<
  Omit<RadioButtonProps, 'name' | 'value' | 'checked'>
>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ theme }) => space({ mb: 2, theme })}

  ${({ disabled }) =>
    variant({
      variants: {
        light: {
          color: disabled ? 'shades.grey143' : 'black',
        },
        dark: {
          color: disabled ? 'shades.grey143' : 'white',
        },
      },
    })}
`;

const PlainRadioButton = ({
  checked,
  onChange,
  disabled,
  feedbackColor,
  name,
  variant: variantProp,
  value,
}: RadioButtonProps) => {
  return (
    <StyledRadioButton
      variant={variantProp}
      checked={checked}
      disabled={disabled}
      feedbackColor={feedbackColor}
    >
      <StyledRadioDot
        variant={variantProp}
        checked={checked}
        feedbackColor={feedbackColor}
      />
      <HiddenRadioButton
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
      />
    </StyledRadioButton>
  );
};

export const RadioButton = ({
  checked,
  onChange,
  label,
  disabled,
  feedbackColor,
  name,
  value,
  variant: variantProp,
}: RadioButtonProps) => {
  return (
    <StyledLabel disabled={disabled} variant={variantProp}>
      <PlainRadioButton
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

RadioButton.defaultProps = {
  variant: 'light',
};
