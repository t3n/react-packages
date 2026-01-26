/* eslint-disable no-nested-ternary */
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { css, styled } from 'styled-components';
import {
  position,
  size,
  space,
  width as styledWidth,
  WidthProps,
} from 'styled-system';

import { MaterialClear } from '@t3n/icons';
import { getThemeColor, ThemeProps } from '@t3n/theme';

import Icon from '../Icon';
import Text from '../Text';

export interface TextareaProps
  extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'width' | 'value'>,
    WidthProps {
  onReset?: () => void;
  isFocused?: boolean;
  defaultValue?: string;
  error?: boolean;
  className?: string;
}

interface StyledNativeTextareaProps extends TextareaProps {
  isFocused: boolean;
}

const color = css<TextareaProps & ThemeProps>`
  color: ${({ isFocused, error, disabled, theme }) => {
    if (error) return theme.colors.feedback.error;
    if (disabled) return theme.colors.shades.grey204;
    if (isFocused) return theme.colors.shades.grey42;
    return theme.colors.shades.grey95;
  }};
`;

const StyledTextarea = styled.div<TextareaProps & ThemeProps>`
  position: relative;
  display: flex;
  align-items: center;
  ${styledWidth}
  ${color}
`;

const padding = ({ theme }: ThemeProps) =>
  space({ pl: 2, pr: 6, pt: 1, pb: 1, theme });

const border = css<StyledNativeTextareaProps & ThemeProps>`
  border: 1px solid
    ${({
      isFocused,
      error,
      disabled,
      theme,
    }: StyledNativeTextareaProps & ThemeProps) =>
      error
        ? theme.colors.feedback.error
        : disabled
          ? theme.colors.shades.grey204
          : isFocused
            ? theme.colors.shades.grey42
            : theme.colors.shades.grey95};
`;

const StyledNativeTextarea = styled.textarea.withConfig({
  shouldForwardProp: (prop) =>
    !['isFocused', 'error', 'disabled', 'rows'].includes(prop),
})<StyledNativeTextareaProps & ThemeProps>`
  width: 100%;
  min-height: ${({ rows }: StyledNativeTextareaProps) =>
    rows ? `${rows * 30}px` : '120px'};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: 1rem;
  line-height: 30px;
  color: ${getThemeColor('text.primary')};
  background-color: ${getThemeColor('background.primary')};
  border-radius: ${(props) => props.theme.border.radii[1]};
  outline: 0;
  ${border}
  ${padding}
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  resize: vertical;

  ::placeholder,
  :disabled {
    opacity: 0.6;
  }

  &::-ms-clear {
    display: none;
  }
`;

const StyledText = styled(Text)`
  position: absolute;
  font-size: 0.7rem;
  top: calc(100% - 6px);
  right: 0;
`;

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  position: absolute;
  padding: 0;
  margin-top: 0.4rem;
  background: transparent;
  border: none;
  outline: 0;
  ${({ theme }) => size({ theme, width: 3, height: 3 })}
  ${({ theme }) => position({ theme, top: 0, right: 1 })}

  &:hover {
    cursor: pointer;
  }
`;

const Textarea = ({
  ref,
  disabled,
  error,
  width = '100%',
  rows,
  className,
  onFocus,
  onBlur,
  onChange,
  onReset,
  isFocused = false,
  defaultValue,
  maxLength,
  ...props
}: TextareaProps & { ref?: React.RefObject<HTMLTextAreaElement | null> }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(defaultValue || '');
  const [focused, setFocused] = useState(isFocused || false);

  useImperativeHandle(ref, () => textareaRef.current!);

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const handleReset = () => {
    setValue('');
    if (textareaRef !== null && textareaRef.current !== null) {
      textareaRef.current.focus();
    }
    if (onReset) onReset();
  };

  useEffect(() => {
    if (focused && textareaRef !== null && textareaRef.current !== null) {
      textareaRef.current.focus();
      textareaRef.current.selectionStart = textareaRef.current.value.length;
    }
  }, [focused]);

  return (
    <StyledTextarea
      disabled={disabled}
      width={width}
      rows={rows}
      error={error}
      className={className}
      isFocused={focused}
    >
      <StyledNativeTextarea
        error={error}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleOnChange}
        isFocused={focused}
        disabled={disabled}
        value={value}
        ref={textareaRef}
        maxLength={maxLength}
        rows={rows}
        {...props}
      />
      {value.length > 0 && !disabled ? (
        <Button tabIndex={-1} onClick={handleReset}>
          <Icon
            component={MaterialClear}
            width="1.5rem"
            height="1.5rem"
            fill={focused ? 'text.primary' : 'shades.grey204'}
          />
        </Button>
      ) : null}
      {typeof maxLength !== 'undefined' && maxLength >= 1 && (
        <StyledText>
          {value.length} / {maxLength}
        </StyledText>
      )}
    </StyledTextarea>
  );
};

export default Textarea;
