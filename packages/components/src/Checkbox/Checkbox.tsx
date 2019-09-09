/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { color, space, border, ColorProps } from 'styled-system';
import { MaterialCheck } from '@t3n/icons';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
import { Text } from '../Text/Text';

interface CheckboxProps extends ColorProps {
  checked: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  feedback?: boolean;
  feedbackColor?: ThemeFeedbackColor;
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1rem;
  height: 1rem;
  opacity: 0;
  ${() => space({ my: 0, mr: 1, ml: 0 })}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  pointer-events: none;
  ${({ theme }) => color({ theme, bg: 'shades.grey232' })};
  ${({ feedbackColor, theme }: CheckboxProps & ThemeProps) =>
    border({
      theme,
      border: '1px solid',
      borderColor: feedbackColor
        ? theme.colors.feedback[feedbackColor]
        : theme.colors.shades.grey42
    })};

  svg {
    position: absolute;
    left: -1px;
    top: -1px;
    transition: all 0.15s ease-in-out;
    pointer-events: none;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transform: scale(${({ checked }) => (checked ? 1 : 0)});
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const CheckboxContainer = styled.div<CheckboxProps>`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  display: flex;
  align-items: center;

  label {
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'inital')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
   /* color: ${({ disabled }) => (disabled ? 'farbe1' : 'farbe2')}; */
    ${({ disabled, theme }) =>
      color({ theme, color: disabled ? 'shades.grey155' : 'black' })}
  }
`;

export const Checkbox = ({
  checked,
  onChange,
  label,
  disabled,
  feedbackColor
}: CheckboxProps) => {
  return (
    <>
      <CheckboxContainer checked={checked} disabled={disabled}>
        <label>
          <HiddenCheckbox
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <Text small inline>
            {label}
          </Text>
        </label>
        <StyledCheckbox checked={checked} feedbackColor={feedbackColor}>
          <MaterialCheck />
        </StyledCheckbox>
      </CheckboxContainer>
    </>
  );
};
