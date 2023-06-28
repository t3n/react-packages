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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme, name }) =>
    color({
      theme,
      bg: name === 'T3N_D_Incontent-1' ? 'background.primary' : 'transparent',
    })};

  ${({ theme, name }) =>
    space({
      theme,
      p: name !== 'T3N_D_Right' && name !== 'T3N_D_Top' ? '16px 0' : 'unset',
    })};

  a:hover {
    border: none !important;
  }

  ${({ name }) =>
    name === 'T3N_D_Right'
      ? css`
          #${name} {
            min-width: 180px !important;
            position: absolute;
            top: 0;
            left: calc(50% + 30.625rem);
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

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

const AdLabel = styled(Box)<AdProps>`
  width: 100%;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;

  ${({ theme }) => space({ mb: 1, theme })}
  ${({ theme }) => typography({ theme, fontSize: '12px' })};
  ${({ theme }) => lineHeight({ theme, lineHeight: '16px' })}
  ${({ theme, name }) =>
    color({
      theme,
      color: 'text.secondary',
      bg: name === 'T3N_D_Incontent-1' ? 'background.primary' : 'transparent',
    })};
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
  text-transform: uppercase;

  ${({ theme }) => typography({ theme, fontSize: '12px' })};
  ${({ theme }) => lineHeight({ theme, lineHeight: '16px' })}
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  ${({ name }) =>
    name === 'T3N_D_Right' || name === 'T3N_D_Top'
      ? css`
          display: none;
        `
      : ''}
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
        <AdLabel id={`${name}-label`} name={name}>
          Anzeige
        </AdLabel>
      )}
      <Box id={name} width={1} display="flex" justifyContent="center">
        <AdPlaceholder name={name}>
          {preview ? `Ad Unit ID: ${name}` : 'Anzeige'}
        </AdPlaceholder>
      </Box>
    </AdWrapper>
  )
);

export default Ad;
