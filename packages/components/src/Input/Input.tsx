import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  space,
  width as styledWidth,
  WidthProps,
  size,
  position
} from 'styled-system';

import { ThemeProps, getThemeColor } from '@t3n/theme';
import {
  MaterialClear,
  MaterialVisibility,
  MaterialVisibilityOff
} from '@t3n/icons';
import { Text } from '../Text';

export type InputTypes = 'text' | 'email' | 'password';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width'>,
    WidthProps {
  type?: InputTypes;
  value?: string;
  defaultValue?: string;
  error?: boolean;
  fixedPlaceholder?: string;
  className?: string;
}

const StyledInput = styled.div<InputProps>`
  position: relative;
  display: flex;
  align-items: center;
  ${styledWidth};
`;

interface StyledNativeInputProps extends InputProps {
  isFocused: boolean;
}

const padding = ({ theme }: ThemeProps) => space({ pl: 1, pr: 5, theme });

const border = css`
  border: 1px solid
    ${({
      isFocused,
      error,
      disabled,
      theme
    }: StyledNativeInputProps & ThemeProps) =>
      error
        ? theme.colors.feedback.error
        : disabled
        ? theme.colors.shades.grey244
        : isFocused
        ? theme.colors.shades.grey42
        : theme.colors.shades.grey143};
`;

const StyledNativeInput = styled.input.attrs(() => ({ noValidate: true }))<
  StyledNativeInputProps
>`
  width: 100%;
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: 1rem;
  line-height: 40px;
  color: ${getThemeColor('text.primary')};
  background-color: ${getThemeColor('background.primary')};
  border-radius: ${props => props.theme.border.radii[1]};
  outline: 0;
  ${border}
  ${padding};

  ::placeholder {
    color: ${getThemeColor('shades.grey204')};
  }
`;

const FixedPlaceholder = styled(Text).attrs(() => ({
  as: 'span'
}))`
  white-space: nowrap;
  line-height: 1rem;
  flex: 0;
  ${({ theme }: ThemeProps) => space({ ml: [1], mr: ['-4px'], theme })};
`;

const Button = styled.button.attrs(() => ({
  type: 'button'
}))`
  position: absolute;
  padding: 0;
  margin-top: -0.75rem;
  background: transparent;
  border: none;
  outline: 0;
  ${({ theme }) => size({ theme, width: 3, height: 3 })}
  ${({ theme }) => position({ theme, top: '50%', right: 1 })}
`;

export const Input = ({
  type,
  value,
  defaultValue,
  disabled,
  error,
  fixedPlaceholder,
  width,
  className,
  onChange,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const [controlledValue, setControlledValue] = useState(
    defaultValue || value || ''
  );
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);

  useEffect(() => {
    if (typeof value !== 'undefined' && !isInitialized) {
      setIsInitialized(true);
      setControlledValue(value);
    }
  }, [value, isInitialized]);

  const focusNativeInputEl = () => {
    if (inputEl.current) inputEl.current.focus();
  };

  const resetValue = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setControlledValue('');

    const event = Object.create(e);
    event.target = inputEl.current;

    if (inputEl.current) inputEl.current.value = '';

    if (onChange) onChange(event as React.ChangeEvent<HTMLInputElement>);
  };

  const handleNativeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setControlledValue(e.currentTarget.value);
    if (onChange) onChange(e);
  };

  const handleNativeInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleNativeInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleButtonPress = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (type === 'password') {
      setRevealPassword(!revealPassword);
    } else {
      resetValue(e);
    }
  };

  const inputType = type === 'password' && revealPassword ? 'text' : type;

  const inputValue = value !== undefined ? value : controlledValue;

  return (
    <StyledInput
      type={inputType}
      disabled={disabled}
      error={error}
      width={width}
      className={className}
      onClick={focusNativeInputEl}
    >
      {fixedPlaceholder && (
        <FixedPlaceholder>{fixedPlaceholder}</FixedPlaceholder>
      )}
      <StyledNativeInput
        value={inputValue}
        ref={inputEl}
        type={inputType}
        disabled={disabled}
        isFocused={isFocused}
        onChange={handleNativeInputChange}
        onFocus={handleNativeInputFocus}
        onBlur={handleNativeInputBlur}
        {...props}
      />
      {(type === 'password' || inputValue) && (
        <Button onClick={handleButtonPress}>
          {type === 'password' && revealPassword ? (
            <MaterialVisibilityOff width="1.5rem" height="1.5rem" />
          ) : type === 'password' ? (
            <MaterialVisibility width="1.5rem" height="1.5rem" />
          ) : (
            <MaterialClear width="1.5rem" height="1.5rem" />
          )}
        </Button>
      )}
    </StyledInput>
  );
};

Input.defaultProps = {
  type: 'text',
  width: '100%'
};
