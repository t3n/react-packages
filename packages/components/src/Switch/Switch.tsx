import React from 'react';
import styled from 'styled-components';
import { space, border, variant, MarginProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

export type VariantType = 'light' | 'dark';

export interface SwitchProps extends MarginProps {
  label?: string;
  name: string;
  value: any;
  checked: boolean;
  disabled?: boolean;
  variant?: VariantType;
  feedbackColor?: ThemeFeedbackColor;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledSwitch = styled(Box)<Omit<SwitchProps, 'name' | 'value'>>`
  display: inline-block;
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  transition: all 0.1s ease-in-out;
  ${({ theme }) => space({ ml: 2, theme })}

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
            : 'shades.grey204'
        },
        dark: {
          bg: disabled
            ? 'shades.black'
            : checked
            ? 'feedback.success'
            : checked && disabled
            ? 'shades.black'
            : 'shades.grey143',
          border: '2px solid',
          borderColor: disabled
            ? 'shades.black'
            : checked && disabled
            ? 'shades.black'
            : checked
            ? 'feedback.success'
            : 'shades.grey143'
        }
      }
    })}

  &:focus,
  &:active {
    ${({ theme }) =>
      border({
        theme,
        border: '2px solid',
        borderColor: 'shades.grey42'
      })};
  }
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
            : 'shades.grey204'
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
            : 'shades.grey143'
        }
      }
    })}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<SwitchProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
  cursor: inherit;
`;

const StyledLabel = styled.label<
  Omit<SwitchProps, 'name' | 'value' | 'checked'>
>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ disabled }) =>
    variant({
      variants: {
        light: {
          color: disabled ? 'shades.grey155' : 'black'
        },
        dark: {
          color: disabled ? 'shades.grey155' : 'white'
        }
      }
    })}
`;

const PlainSwitch = ({
  checked,
  onChange,
  disabled,
  name,
  variant: variantProp,
  value
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
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
      />
    </StyledSwitch>
  );
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled,
  variant: variantProp,
  name,
  value,
  ...marginProps
}) => {
  return (
    <StyledLabel variant={variantProp} disabled={disabled} {...marginProps}>
      <Text small inline>
        {label}
      </Text>
      <PlainSwitch
        variant={variantProp}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        name={name}
        value={value}
      />
    </StyledLabel>
  );
};

Switch.defaultProps = {
  variant: 'light'
};
