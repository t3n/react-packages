import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import styled, { css } from 'styled-components';
import {
  space,
  width as styledWidth,
  WidthProps,
  size,
  position,
} from 'styled-system';

import { ThemeProps, getThemeColor } from '@t3n/theme';
import {
  MaterialClear,
  MaterialVisibility,
  MaterialVisibilityOff,
} from '@t3n/icons';
import { Icon } from '../Icon';

export type InputTypes = 'text' | 'email' | 'password';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'value'>,
    WidthProps {
  type?: InputTypes;
  onReset?: () => void;
  isFocused?: boolean;
  defaultValue?: string;
  error?: boolean;
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

const padding = ({ theme }: ThemeProps) => space({ pl: 2, pr: 6, theme });

const border = css`
  border: 1px solid
    ${({
      isFocused,
      error,
      disabled,
      theme,
    }: StyledNativeInputProps & ThemeProps) =>
      error
        ? theme.colors.feedback.error
        : disabled
        ? theme.colors.shades.grey204
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
  border-radius: ${(props) => props.theme.border.radii[1]};
  outline: 0;
  ${border}
  ${padding};

  ::placeholder,
  :disabled {
    opacity: 0.6;
  }

  &[type='text'],
  &[type='password'],
  &[type='email'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &::-ms-clear {
    display: none;
  }
`;

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  position: absolute;
  padding: 0;
  margin-top: -0.75rem;
  background: transparent;
  border: none;
  outline: 0;
  ${({ theme }) => size({ theme, width: 3, height: 3 })}
  ${({ theme }) => position({ theme, top: '50%', right: 1 })}

  &:hover {
    cursor: pointer;
  }
`;

export const Input = forwardRef(
  (
    {
      disabled,
      type,
      error,
      width,
      className,
      onFocus,
      onBlur,
      onChange,
      onReset,
      isFocused,
      defaultValue,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(defaultValue || '');
    const [focused, setFocused] = useState(isFocused || false);
    const [revealPassword, setRevealPassword] = useState(false);

    useImperativeHandle(ref, () => inputRef.current);

    const inputType = type === 'password' && revealPassword ? 'text' : type;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setFocused(false);
      if (onBlur) onBlur(e);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setValue(e.target.value);
      if (onChange) onChange(e);
    };

    const handleReset = () => {
      setValue('');
      if (inputRef !== null && inputRef.current !== null) {
        inputRef.current.focus();
      }
      if (onReset) onReset();
    };

    const handleRevealPassord = () => {
      setRevealPassword(!revealPassword);
      if (inputRef !== null && inputRef.current !== null) {
        inputRef.current.focus();
      }
    };

    useEffect(() => {
      if (focused && inputRef !== null && inputRef.current !== null) {
        inputRef.current.focus();
        if (type !== 'email') {
          // E-Mail type does not support selectionStart
          inputRef.current.selectionStart = inputRef.current.value.length;
        }
      }
    }, [focused, type]);

    return (
      <StyledInput
        disabled={disabled}
        width={width}
        className={className}
        isFocused={focused}
      >
        <StyledNativeInput
          error={error}
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleOnChange}
          isFocused={focused}
          disabled={disabled}
          value={value}
          ref={inputRef}
          {...props}
        />
        {value.length > 0 && !disabled ? (
          type && type === 'password' ? (
            <Button tabIndex={-1} onClick={handleRevealPassord}>
              <Icon
                component={
                  revealPassword ? MaterialVisibilityOff : MaterialVisibility
                }
                fill={focused ? 'text.primary' : 'shades.grey204'}
              />
            </Button>
          ) : (
            <Button tabIndex={-1} onClick={handleReset}>
              <Icon
                component={MaterialClear}
                width="1.5rem"
                height="1.5rem"
                fill={focused ? 'text.primary' : 'shades.grey204'}
              />
            </Button>
          )
        ) : null}
      </StyledInput>
    );
  }
);

Input.defaultProps = {
  type: 'text',
  isFocused: false,
  width: '100%',
};
