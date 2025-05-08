import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { color, lineHeight, space, typography } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box, { BoxProps } from '../Box';

export type AdName =
  | 'T3N_D_Top'
  | 'T3N_D_Right'
  | 'T3N_D_Incontent-1'
  | 'T3N_D_Incontent-2'
  | 'T3N_D_Incontent-3'
  | 'T3N_D_Incontent-4'
  | 'T3N_D_Incontent-5'
  | 'T3N_D_Incontent-6'
  | 'T3N_D_Incontent-7'
  | 'T3N_D_Incontent-8'
  | 'T3N_D_Incontent-9'
  | 'T3N_D_Incontent-10'
  | 'T3N_D_Incontent-11'
  | 'T3N_D_Sidebar-1'
  | 'T3N_D_Sidebar-2'
  | 'T3N_D_Sidebar-3'
  | 'T3N_M_Incontent-1'
  | 'T3N_M_Incontent-2'
  | 'T3N_M_Incontent-3'
  | 'T3N_M_Incontent-4'
  | 'T3N_M_Incontent-5'
  | 'T3N_M_Incontent-6'
  | 'T3N_M_Incontent-7'
  | 'T3N_M_Incontent-8'
  | 'T3N_M_Incontent-9'
  | 'T3N_M_Incontent-10'
  | 'T3N_M_Sticky';
export interface AdProps extends BoxProps {
  name: AdName;
  preview?: boolean;
  style?: React.CSSProperties;
}

const AdWrapper = styled(Box)<AdProps>`
  min-height: calc(250px + 16px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 0;

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
          min-width: 180px !important;
          position: absolute;
          top: 0;
          left: calc(50% + 30.625rem);
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          position: fixed;
          top: 113px;
          z-index: 1;

          @media screen and (max-width: 1330px) {
            left: 61.25rem;
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

  ${({ name }) =>
    name.startsWith('T3N_M_Incontent-')
      ? css`
          @media screen and (max-width: ${(props: ThemeProps) =>
              props.theme.breakpoints[0]}) {
            display: block;
            min-height: 600px !important;
          }

          .c-ad {
            position: sticky !important;
            top: 78px;
            align-items: flex-start;
          }
        `
      : ''}

  #dspx_advDiv_ {
    display: none;
  }

  #dspx_scroller:not(:empty) {
    margin-top: -250px;
  }
`;

const AdLabel = styled(Box)<AdProps>`
  width: 100%;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  display: none;

  ${({ theme }) => space({ mb: 1, theme })}
  ${({ theme }) => typography({ theme, fontSize: '12px' })};
  ${({ theme }) => lineHeight({ theme, lineHeight: '16px' })}
  ${({ theme, name }) =>
    color({
      theme,
      color: 'text.secondary',
      bg: name === 'T3N_D_Incontent-1' ? 'background.primary' : 'transparent',
    })};

  ${({ name }) =>
    name.startsWith('T3N_M_Incontent-')
      ? css`
          @media screen and (max-width: ${(props: ThemeProps) =>
              props.theme.breakpoints[0]}) {
            position: sticky !important;
            top: 58px;
          }
        `
      : ''}
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

  ${({ name }) =>
    name.startsWith('T3N_M_Incontent-')
      ? css`
          @media screen and (max-width: ${(props: ThemeProps) =>
              props.theme.breakpoints[0]}) {
            min-height: 600px !important;
          }
        `
      : ''}
`;

const Ad = forwardRef<HTMLDivElement, AdProps>(
  // eslint-disable-next-line no-shadow
  ({ name, preview, style, color, ...boxProps }, ref) => (
    <AdWrapper
      name={name}
      style={style}
      className={`c-ad-container -${name}`}
      color={color as any}
      {...boxProps}
      ref={ref}
    >
      {name !== 'T3N_D_Right' && name !== 'T3N_D_Top' && (
        <AdLabel id={`${name}-label`} name={name}>
          Anzeige
        </AdLabel>
      )}
      <Box
        id={name}
        className="c-ad"
        width={1}
        display="flex"
        justifyContent={name !== 'T3N_D_Right' ? 'center' : ''}
        flexDirection="column"
        alignItems={name !== 'T3N_D_Right' ? 'center' : ''}
      >
        <AdPlaceholder name={name}>
          {preview ? `Ad Unit ID: ${name}` : 'Anzeige'}
        </AdPlaceholder>
      </Box>
      {(name === 'T3N_M_Incontent-2' || name === 'T3N_D_Incontent-3') && (
        <div id="dspx_scroller" />
      )}
    </AdWrapper>
  ),
);

export default Ad;
