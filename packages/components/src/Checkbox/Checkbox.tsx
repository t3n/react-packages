/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { color, space, border, ColorProps } from 'styled-system';
import { MaterialCheck } from '@t3n/icons';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

interface StyledCheckboxProps extends ColorProps {
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

const StyledCheckbox = styled(Box)<StyledCheckboxProps>`
  display: inline-block;
  position: relative;
  line-height: 1;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  pointer-events: none;
  ${({ theme }) => color({ theme, bg: 'shades.grey232' })};
  ${({ feedbackColor, theme }: StyledCheckboxProps & ThemeProps) =>
    border({
      theme,
      border: '1px solid',
      borderColor: feedbackColor
        ? theme.colors.feedback[feedbackColor]
        : theme.colors.shades.grey42
    })};
`;

const StyledMaterialCheck = styled(MaterialCheck)<
  Omit<CheckboxProps, 'name' | 'value'>
>`
  position: absolute;
  top: -1px;
  left: -1px;
  transition: all 0.15s ease-in-out;
  pointer-events: none;
  opacity: ${({ checked }) => (checked ? 1 : 0)};
  transform: scale(${({ checked }) => (checked ? 1 : 0)});
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledLabel = styled.label<StyledCheckboxProps>`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ disabled, theme }) =>
    color({ theme, color: disabled ? 'shades.grey155' : 'black' })}
`;

const PlainCheckbox = ({
  checked,
  onChange,
  disabled,
  feedbackColor,
  name,
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
      <StyledCheckbox feedbackColor={feedbackColor}>
        <StyledMaterialCheck checked={checked} />
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
  value
}: CheckboxProps) => {
  return (
    <>
      <StyledLabel>
        <PlainCheckbox
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
