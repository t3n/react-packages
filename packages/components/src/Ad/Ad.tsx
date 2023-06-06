import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { color, lineHeight, space, typography } from 'styled-system';

import Box, { BoxProps } from '../Box';

export interface AdProps extends BoxProps {
  name: string;
  preview?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AdWrapper = styled(Box)<AdProps>`
  min-height: calc(250px + 16px);
  position: relative;
  ${({ theme, name }) =>
    color({
      theme,
      bg:
        name !== 'T3N_D_Right' && name !== 'T3N_D_Top'
          ? 'background.primary'
          : 'unset',
    })};
  ${({ theme, name }) =>
    space({
      theme,
      p: name !== 'T3N_D_Right' && name !== 'T3N_D_Top' ? '8px 0' : 'unset',
    })};

  a:hover {
    border: none !important;
  }

  ${({ name }) =>
    name === 'T3N_D_Right'
      ? css`
          #{name} {
            min-width: 180px !important;
            position: absolute;
            top: -16px;
            left: calc(50% + 30.625rem);

            @media screen and (max-width: 1330px) {
              left: 61.25rem;
            }
          }
        `
      : ''}

  ${({ name }) =>
    name === 'T3N_D_Right' || name === 'T3N_D_Top'
      ? css`
          min-height: unset;

          .c-ad-label {
            background-color: transparent;
          }
        `
      : ''}
`;

const AdLabel = styled(Box)`
  width: 100%;
  letter-spacing: 2px;
  position: absolute;
  text-align: center;

  ${({ theme }) => space({ mb: 1, theme })}
  ${({ theme }) => typography({ theme, fontSize: '12px' })};
  ${({ theme }) => lineHeight({ theme, lineHeight: '16px' })}
  ${({ theme }) =>
    color({ theme, color: 'text.secondary', bg: 'background.primary' })};

  span {
    text-transform: uppercase;
  }
`;

const AdPlaceholder = styled(Box)<AdProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;

  ${({ theme }) => typography({ theme, fontSize: '12px' })};
  ${({ theme }) => lineHeight({ theme, lineHeight: '16px' })}
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  ${({ name }) =>
    name === 'T3N_D_Right' || name === 'T3N_D_Top'
      ? css`
          display: none;
        `
      : ''}

  span {
    text-transform: uppercase;
  }
`;

const Ad = forwardRef<HTMLDivElement, AdProps>(
  // eslint-disable-next-line react/prop-types, no-shadow
  ({ name, preview, style, className, color, ...boxProps }, ref) => (
    <AdWrapper
      name={name}
      style={style}
      className={className}
      color={color as any}
      {...boxProps}
      ref={ref}
    >
      {name !== 'T3N_D_Right' && name !== 'T3N_D_Top' && (
        <AdLabel id={`${name}-label`}>
          <span>Anzeige</span>
        </AdLabel>
      )}
      <Box id={name} width={1} display="flex" justifyContent="center">
        <AdPlaceholder name={name}>
          {preview ? `Ad Unit ID: ${name}` : <span>Anzeige</span>}
        </AdPlaceholder>
      </Box>
    </AdWrapper>
  )
);

export default Ad;
