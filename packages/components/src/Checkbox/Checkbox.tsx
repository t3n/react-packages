import React, { useState } from 'react';
import styled from 'styled-components';
import { space, variant } from 'styled-system';
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
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: 0;
`;

const StyledCheckbox = styled(Box)<
  Omit<CheckboxProps, 'name' | 'value'> & { focused?: boolean }
>`
  display: inline-block;
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  transition: all 0.1s ease-in-out;
  pointer-events: none;
  ${({ theme }) => space({ mr: 2, theme })}

  ${({ checked, disabled, feedbackColor, focused }) =>
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
            ? `feedback.${feedbackColor}`
            : focused
            ? 'shades.grey42'
            : checked && disabled
            ? 'shades.grey143'
            : checked
            ? 'shades.grey42'
            : 'shades.grey143'
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
            ? `feedback.${feedbackColor}`
            : focused
            ? 'shades.white'
            : checked && disabled
            ? 'shades.grey143'
            : checked
            ? 'shades.white'
            : 'shades.grey204'
        }
      }
    })}
`;

const StyledIcon = styled.span<
  Omit<CheckboxProps, 'name' | 'value'> & ThemeProps
>`
  position: absolute;
  top: -1px;
  left: -1px;
  line-height: 0;
  transition: all 0.1s ease-in-out;
  pointer-events: none;
  transform: scale(${({ checked }) => (checked ? 1 : 0)});
  opacity: ${({ checked }) => (checked ? 1 : 0)};

  svg {
    ${({ feedbackColor }) =>
      variant({
        variants: {
          light: {
            fill: feedbackColor ? `feedback.${feedbackColor}` : 'shades.white'
          },
          dark: {
            fill: feedbackColor ? `feedback.${feedbackColor}` : 'shades.grey42'
          }
        }
      })}
  }
`;

const StyledLabel = styled.label<
  Omit<CheckboxProps, 'name' | 'value' | 'checked'>
>`
  display: inline-flex;
  align-items: center;
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
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <StyledCheckbox
      variant={variantProp}
      checked={checked}
      disabled={disabled}
      feedbackColor={feedbackColor}
      focused={hasFocus}
    >
      <HiddenCheckbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <StyledIcon
        variant={variantProp}
        checked={checked}
        feedbackColor={feedbackColor}
      >
        <MaterialCheck />
      </StyledIcon>
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

Checkbox.defaultProps = {
  variant: 'light'
};
