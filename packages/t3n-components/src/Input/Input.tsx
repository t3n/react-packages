import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { space, width as styledWidth, WidthProps } from 'styled-system';

import { ThemeProps, getThemeColor } from '@t3n/theme';
import { Text } from '../Text';

export type InputTypes = 'text' | 'email' | 'password';
export type InputStates = 'disabled' | 'invalid';

interface InputProps extends WidthProps {
  type: InputTypes;
  value?: string;
  defaultValue?: string;
  state?: InputStates;
  placeholder?: string;
  fixedPlaceholder?: string;
  name?: string;
  id?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
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
    color: ${getThemeColor('shades.grey232')};
  }
`;

interface StyledInputProps extends Omit<InputProps, 'onChange'>, ThemeProps {
  isFocused: boolean;
}

const border = css`
  border: 1px solid
    ${({ isFocused, state, theme }: StyledInputProps) =>
      state === 'invalid'
        ? theme.colors.feedback.error
        : isFocused && !state
        ? theme.colors.shades.grey42
        : theme.colors.shades.grey232};
`;

const StyledInput = styled.div<StyledInputProps>`
  position: relative;
  ${styledWidth};
  display: flex;
  align-items: center;
  background-color: ${getThemeColor('background.primary')};
  ${border}
  border-radius: 4px;
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

const Input = ({
  type,
  value,
  defaultValue,
  state,
  fixedPlaceholder,
  width,
  name,
  id,
  className,
  onChange,
  ...props
}: InputProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const [controlledValue, setControlledValue] = useState(() => {
    console.log('Initialize');

    return defaultValue || value || '';
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);

  useEffect(() => {
    if (typeof value !== 'undefined' && isInitialized) {
      console.log('Set value');
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

    onChange(event as React.ChangeEvent<HTMLInputElement>);
  };

  const handleNativeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setControlledValue(e.currentTarget.value);
    onChange(e);
  };

  const handleNativeInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setFocused(true);
  };

  const handleNativeInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setFocused(false);
  };

  const handleButtonPress = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (type === 'password') {
      setRevealPassword(!revealPassword);
    } else {
      resetValue(e);
    }
  };

  const inputType = type === 'password' && revealPassword ? 'text' : type;

  return (
    <StyledInput
      type={inputType}
      state={state}
      width={width}
      className={className}
      isFocused={isFocused}
      onClick={focusNativeInputEl}
    >
      {fixedPlaceholder && (
        <FixedPlaceholder>{fixedPlaceholder}</FixedPlaceholder>
      )}
      <StyledNativeInput
        value={value || controlledValue}
        ref={inputEl}
        type={inputType}
        disabled={state === 'disabled'}
        name={name}
        id={id}
        onChange={handleNativeInputChange}
        onFocus={handleNativeInputFocus}
        onBlur={handleNativeInputBlur}
        {...props}
      />
      {(type === 'password' || controlledValue) && (
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
  width: '100%'
};

export default Input;
