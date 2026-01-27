/* eslint-disable no-nested-ternary */
import React from 'react';
import { styled } from 'styled-components';
import { space, variant as styledVariant } from 'styled-system';

import { MaterialCheck } from '@t3n/icons';
import { ThemeProps } from '@t3n/theme';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';

import Box from '../Box';
import Text from '../Text';

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

const StyledCheckbox = styled(Box).withConfig({
  shouldForwardProp: (prop) =>
    !['checked', 'disabled', 'feedbackColor'].includes(prop),
})<Omit<CheckboxProps, 'name' | 'value'>>`
  display: inline-block;
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  transition: all 0.1s ease-in-out;
  pointer-events: none;
  ${({ theme }) => space({ mr: 2, theme })}

  ${({ checked, disabled, feedbackColor }) =>
    styledVariant({
      variants: {
        light: {
          bg:
            checked && disabled
              ? 'shades.grey95'
              : checked && feedbackColor
                ? 'shades.white'
                : checked
                  ? 'shades.grey42'
                  : 'shades.white',
          border: '1px solid',
          borderColor: feedbackColor
            ? `feedback.${feedbackColor}`
            : checked && disabled
              ? 'shades.grey95'
              : checked
                ? 'shades.grey42'
                : 'shades.grey95',
        },
        dark: {
          bg:
            checked && disabled
              ? 'shades.grey95'
              : checked && feedbackColor
                ? 'shades.grey44'
                : checked
                  ? 'shades.white'
                  : 'shades.grey44',
          border: '1px solid',
          borderColor: feedbackColor
            ? `feedback.${feedbackColor}`
            : checked && disabled
              ? 'shades.grey95'
              : checked
                ? 'shades.white'
                : 'shades.grey204',
        },
      },
    })}

    &:focus {
    ${styledVariant({
      variants: {
        light: {
          border: '2px solid',
          borderColor: 'shades.grey42',
        },
        dark: {
          border: '2px solid',
          borderColor: 'shades.white',
        },
      },
    })}
  }
`;

const StyledIcon = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    !['checked', 'disabled', 'feedbackColor'].includes(prop),
})<Omit<CheckboxProps, 'name' | 'value'> & ThemeProps>`
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
      styledVariant({
        variants: {
          light: {
            fill: feedbackColor ? `feedback.${feedbackColor}` : 'shades.white',
          },
          dark: {
            fill: feedbackColor ? `feedback.${feedbackColor}` : 'shades.grey42',
          },
        },
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
    styledVariant({
      variants: {
        light: {
          color: disabled ? 'shades.grey95' : 'black',
        },
        dark: {
          color: disabled ? 'shades.grey95' : 'white',
        },
      },
    })}

  &:focus > div {
    ${styledVariant({
      variants: {
        light: {
          border: '2px solid',
          borderColor: 'shades.grey42',
        },
        dark: {
          border: '2px solid',
          borderColor: 'shades.white',
        },
      },
    })}
  }
`;

const PlainCheckbox = ({
  checked,
  onChange,
  disabled,
  feedbackColor,
  name,
  variant: variantProp,
  value,
}: CheckboxProps) => {
  return (
    <StyledCheckbox
      variant={variantProp}
      checked={checked}
      disabled={disabled}
      feedbackColor={feedbackColor}
      tabIndex={0}
    >
      <HiddenCheckbox
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
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

const Checkbox = ({
  checked,
  onChange,
  label,
  disabled,
  feedbackColor,
  name,
  value,
  variant = 'light',
}: CheckboxProps) => {
  return (
    <StyledLabel disabled={disabled} variant={variant}>
      <PlainCheckbox
        variant={variant}
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

export default Checkbox;
