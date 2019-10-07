/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { size, space, border, variant, ColorProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

type colorSchemeType = 'light' | 'dark';

interface ColorSchemeProps {
  colorScheme: colorSchemeType;
}

interface StyledSwitchProps extends ColorProps, ColorSchemeProps {
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  feedbackColor?: ThemeFeedbackColor;
}

export interface SwitchProps extends StyledSwitchProps {
  name: string;
  checked: boolean;
  value: any;
}

const SwitchContainer = styled(Box)<Omit<StyledSwitchProps, 'colorScheme'>>`
  position: relative;
  display: inline-block;
  ${() => space({ ml: 2 })}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 2.5rem;
  height: 1.5rem;
  opacity: 0;
  ${() => space({ my: 0, mr: 2, ml: 0 })}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledSwitch = styled(Box)<Omit<SwitchProps, 'name' | 'value'>>`
  display: inline-block;
  position: relative;
  line-height: 1;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 20px;
  pointer-events: none;
  transition: all 0.1s ease-in-out;

  ${({ checked, disabled }) =>
    variant({
      prop: 'colorScheme',
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
    ${({ theme }: StyledSwitchProps & ThemeProps) =>
      border({
        theme,
        border: '2px solid',
        borderColor: 'shades.grey42'
      })};
  }
`;

const StyledSwitchToggle = styled.div<
  Omit<SwitchProps, 'name' | 'value'> & ThemeProps
>`
  ${({ theme }) => size({ theme, size: '1.5rem' })}
  ${({ checked, disabled }) =>
    variant({
      prop: 'colorScheme',
      variants: {
        light: {
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
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: -2px;
  left: ${({ checked }) => (checked ? '14px' : '-2px')};
  transition: all 0.15s ease-in-out;
  pointer-events: none;

  ${() =>
    variant({
      prop: 'colorScheme',
      variants: {
        light: {
          bg: 'shades.white'
        },
        dark: {
          bg: 'shades.grey42'
        }
      }
    })}
`;

const StyledLabel = styled.label<StyledSwitchProps>`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  ${({ disabled }) =>
    variant({
      prop: 'colorScheme',
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
  colorScheme,
  value
}: SwitchProps) => {
  return (
    <SwitchContainer>
      <HiddenCheckbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
      />
      <StyledSwitch
        colorScheme={colorScheme}
        checked={checked}
        disabled={disabled}
      >
        <StyledSwitchToggle
          colorScheme={colorScheme}
          checked={checked}
          disabled={disabled}
        />
      </StyledSwitch>
    </SwitchContainer>
  );
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled,
  name,
  value,
  colorScheme
}) => {
  return (
    <>
      <StyledLabel colorScheme={colorScheme} disabled={disabled}>
        <Text small inline>
          {label}
        </Text>
        <PlainSwitch
          colorScheme={colorScheme}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          name={name}
          value={value}
        />
      </StyledLabel>
    </>
  );
};
