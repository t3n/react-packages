/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { MarginProps, space, variant, width, WidthProps } from 'styled-system';

import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';

import Box from '../Box';
import Text from '../Text';

export type VariantType = 'light' | 'dark';

export interface SwitchProps extends MarginProps, WidthProps {
  label?: string;
  name: string;
  value: any;
  checked: boolean;
  disabled?: boolean;
  variant?: VariantType;
  feedbackColor?: ThemeFeedbackColor;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledSwitch = styled(Box)<Omit<SwitchProps, 'name' | 'value'>>`
  display: inline-block;
  position: relative;
  min-width: 2.5rem;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  transition: all 0.1s ease-in-out;
  ${({ theme }) => space({ ml: 3, theme })}

  ${({ checked, disabled }) =>
    variant({
      variants: {
        light: {
          bg: disabled
            ? 'shades.grey232'
            : checked
              ? 'feedback.success'
              : checked && disabled
                ? 'shades.grey232'
                : 'shades.grey204',
          border: '2px solid',
          borderColor: disabled
            ? 'shades.grey232'
            : checked && disabled
              ? 'shades.grey232'
              : checked
                ? 'feedback.success'
                : 'shades.grey204',
        },
        dark: {
          bg: disabled
            ? 'shades.black'
            : checked
              ? 'feedback.success'
              : checked && disabled
                ? 'shades.black'
                : 'shades.grey95',
          border: '2px solid',
          borderColor: disabled
            ? 'shades.black'
            : checked && disabled
              ? 'shades.black'
              : checked
                ? 'feedback.success'
                : 'shades.grey95',
        },
      },
    })}
`;

const StyledSwitchToggle = styled.div<Omit<SwitchProps, 'name' | 'value'>>`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: -2px;
  left: -2px;
  border-radius: 50%;
  transition: all 0.15s ease-in-out;
  transform: translateX(${({ checked }) => (checked ? '1rem' : 0)});

  ${({ checked, disabled }) =>
    variant({
      variants: {
        light: {
          bg: 'shades.white',
          border: '2px solid',
          borderColor: disabled
            ? 'shades.grey232'
            : disabled && checked
              ? 'shades.grey232'
              : checked
                ? 'feedback.success'
                : 'shades.grey204',
        },
        dark: {
          bg: 'shades.grey42',
          border: '2px solid',
          borderColor: disabled
            ? 'shades.black'
            : disabled && checked
              ? 'shades.black'
              : checked
                ? 'feedback.success'
                : 'shades.grey95',
        },
      },
    })}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<SwitchProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
  cursor: ${({ disabled, readOnly }) =>
    disabled ? 'not-allowed' : readOnly ? 'default' : 'pointer'};
`;

const StyledLabel = styled.label<
  Omit<SwitchProps, 'name' | 'value' | 'checked'>
>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled, readOnly }) =>
    disabled ? 'not-allowed' : readOnly ? 'default' : 'pointer'};
  ${width};

  ${({ disabled }) =>
    variant({
      variants: {
        light: {
          color: disabled ? 'shades.grey155' : 'black',
        },
        dark: {
          color: disabled ? 'shades.grey155' : 'white',
        },
      },
    })}
`;

const PlainSwitch = ({
  checked,
  readOnly,
  onChange,
  disabled,
  name,
  variant: variantProp,
  value,
}: SwitchProps) => {
  return (
    <StyledSwitch variant={variantProp} checked={checked} disabled={disabled}>
      <StyledSwitchToggle
        variant={variantProp}
        checked={checked}
        disabled={disabled}
      />
      <HiddenCheckbox
        checked={checked}
        onChange={readOnly ? undefined : onChange}
        readOnly={readOnly}
        disabled={disabled}
        name={name}
        value={value}
      />
    </StyledSwitch>
  );
};

const Switch: React.FC<SwitchProps> = ({
  checked,
  readOnly,
  onChange,
  label,
  disabled,
  variant: variantProp,
  name,
  value,
  width: widthProp,
  ...marginProps
}) => {
  return (
    <StyledLabel
      variant={variantProp}
      disabled={disabled}
      readOnly={readOnly}
      width={widthProp}
      {...marginProps}
    >
      <Text inline>{label}</Text>
      <PlainSwitch
        variant={variantProp}
        checked={checked}
        disabled={disabled}
        onChange={readOnly ? undefined : onChange}
        readOnly={readOnly}
        name={name}
        value={value}
      />
    </StyledLabel>
  );
};

Switch.defaultProps = {
  variant: 'light',
};

export default Switch;
