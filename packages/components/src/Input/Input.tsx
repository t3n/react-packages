import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { space, width as styledWidth, WidthProps } from 'styled-system';

import { ThemeProps, getThemeColor } from '@t3n/theme';
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

interface NativeInputProps
  extends Omit<InputProps, 'fixedPlaceholder' | 'width'>,
    ThemeProps {}

const padding = ({ theme }: ThemeProps) => space({ pl: 1, pr: 5, theme });

const StyledNativeInput = styled.input.attrs(() => ({ noValidate: true }))<
  NativeInputProps
>`
  width: 100%;
  height: 40px;
  color: ${getThemeColor('text.primary')};
  background-color: transparent;
  font-family: ${({ theme }: NativeInputProps) => theme.fonts.default};
  font-size: 1rem;
  line-height: 40px;
  border: none;
  outline: 0;
  ${padding};

  ::placeholder {
    color: ${getThemeColor('text.secondary')};
  }
`;

interface StyledInputProps extends InputProps {
  isFocused: boolean;
}

const border = css`
  border: 1px solid
    ${({ isFocused, error, disabled, theme }: StyledInputProps & ThemeProps) =>
      error
        ? theme.colors.feedback.error
        : disabled
        ? theme.colors.shades.grey244
        : isFocused
        ? theme.colors.shades.grey42
        : theme.colors.shades.grey232};
`;

const StyledInput = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${getThemeColor('background.primary')};
  border-radius: 4px;
  ${styledWidth};
  ${border}
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
  top: 50%;
  right: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  margin-top: -0.75rem;
  background: transparent;
  border: none;
  outline: 0;
  font-size: 1.5rem;
  line-height: 1rem;
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
    if (typeof value !== 'undefined' && isInitialized) {
      setIsInitialized(true);
      setControlledValue(value);
    }
  }, [value]);

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
      isFocused={isFocused}
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
        onChange={handleNativeInputChange}
        onFocus={handleNativeInputFocus}
        onBlur={handleNativeInputBlur}
        {...props}
      />
      {(type === 'password' || inputValue) && (
        <Button onClick={handleButtonPress}>
          {type === 'password' && revealPassword
            ? '🙈'
            : type === 'password'
            ? '🐵'
            : '✖️'}
        </Button>
      )}
    </StyledInput>
  );
};

Input.defaultProps = {
  type: 'text',
  width: '100%'
};
