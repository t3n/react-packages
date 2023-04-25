import React from 'react';
import styled, { css } from 'styled-components';
import { color } from 'styled-system';

import Ad, { AdProps } from '../Ad';

export type LegacyAdName =
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

export interface LegacyAdProps extends Pick<AdProps, 'preview'> {
  name: LegacyAdName;
  forceBackground?: boolean;
  forceHint?: boolean;
}

const StyledLegacyAd = styled(Ad)<LegacyAdProps>`
  a:hover {
    border: none !important;
  }

  ${({ name, theme }) =>
    name === 'T3N_D_Top'
      ? css`
          ${color({
            theme,
            bg: [
              'background.primary',
              'background.primary',
              'background.secondary',
            ],
          })}
        `
      : ''}

  ${({ name, theme }) =>
    name === 'T3N_D_Incontent-1'
      ? css`
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          ${color({
            theme,
            bg: [
              'background.primary',
              'background.primary',
              'background.secondary',
            ],
          })}
          /* The background image svg is not the same as in styleguide-rebrush, so be careful when updating! */
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16px' width='46px'><text x='0' y='12px' fill='%238f8f8f' font-size='12px' font-family='-apple-system, system-UI, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'>Anzeige</text></svg>");
          background-position: center center;
          background-repeat: no-repeat;

          #${name} {
            text-align: center;
            padding: 5px;
            position: relative;
          }
        `
      : ''}
  ${({ name, preview }) =>
    name === 'T3N_D_Right'
      ? css`
          width: auto !important;
          ${preview ? 'height: auto !important;' : ''}

          #${name} {
            width: auto !important;
            ${preview ? 'width: 180px !important;' : ''}
            ${preview ? 'height: 480px !important;' : ''}
            position: absolute;
            top: 0;
            left: calc(50% + 30.625rem);

            @media screen and (max-width: 1330px) {
              left: 61.25rem;
            }
          }
        `
      : ''}
  ${({ name }) =>
    [
      'T3N_D_Top',
      'T3N_D_Right',
      'T3N_D_Incontent-1',
      'T3N_D_Incontent-2',
      'T3N_D_Incontent-3',
      'T3N_D_Incontent-4',
      'T3N_D_Incontent-5',
      'T3N_D_Incontent-6',
      'T3N_D_Incontent-7',
      'T3N_D_Incontent-8',
      'T3N_D_Incontent-9',
      'T3N_D_Incontent-10',
      'T3N_D_Incontent-11',
      'T3N_D_Sidebar-1',
      'T3N_D_Sidebar-2',
      'T3N_D_Sidebar-3',
      'T3N_M_Incontent-1',
      'T3N_M_Incontent-2',
      'T3N_M_Incontent-3',
      'T3N_M_Incontent-4',
      'T3N_M_Incontent-5',
      'T3N_M_Incontent-6',
      'T3N_M_Incontent-7',
      'T3N_M_Incontent-8',
      'T3N_M_Incontent-9',
      'T3N_M_Incontent-10',
      'T3N_M_Sticky',
    ].includes(name)
      ? css`
          #${name} {
            text-align: center;
          }
        `
      : ''}
  ${({ name }) =>
    [
      'T3N_M_Incontent-1',
      'T3N_D_Sidebar-1',
      'T3N_D_Incontent-3',
      'T3N_M_Incontent-2',
      'T3N_D_Sidebar-2',
      'T3N_D_Incontent-5',
      'T3N_M_Incontent-4',
      'T3N_D_Sidebar-3',
      'T3N_D_Incontent-6',
      'T3N_M_Incontent-5',
      'T3N_M_Incontent-2',
      'T3N_D_Incontent-1',
      'T3N_D_Incontent-7',
      'T3N_M_Incontent-6',
      'T3N_D_Incontent-8',
      'T3N_M_Incontent-7',
      'T3N_D_Incontent-9',
      'T3N_M_Incontent-8',
      'T3N_D_Incontent-10',
      'T3N_M_Incontent-9',
      'T3N_D_Incontent-4',
      'T3N_M_Incontent-3',
    ].includes(name)
      ? css`
          #${name} {
            margin-bottom: 20px;
          }
        `
      : ''}
  ${({ name }) =>
    [
      'T3N_M_Incontent-1',
      'T3N_D_Incontent-3',
      'T3N_M_Incontent-2',
      'T3N_D_Incontent-5',
      'T3N_M_Incontent-4',
      'T3N_D_Incontent-6',
      'T3N_M_Incontent-5',
      'T3N_M_Incontent-2',
      'T3N_D_Incontent-1',
      'T3N_D_Incontent-7',
      'T3N_M_Incontent-6',
      'T3N_D_Incontent-8',
      'T3N_M_Incontent-7',
      'T3N_D_Incontent-9',
      'T3N_M_Incontent-8',
      'T3N_D_Incontent-10',
      'T3N_M_Incontent-9',
      'T3N_D_Incontent-4',
      'T3N_M_Incontent-3',
    ].includes(name)
      ? css`
          #${name} {
            margin-top: 20px;
          }
        `
      : ''}
  ${({ name, theme }) =>
    [
      'T3N_D_Sidebar-1',
      'T3N_D_Incontent-3',
      'T3N_M_Incontent-2',
      'T3N_D_Sidebar-2',
      'T3N_D_Incontent-5',
      'T3N_M_Incontent-4',
      'T3N_D_Sidebar-3',
    ].includes(name)
      ? css`
          #${name} {
            ${color({
              theme,
              bg: [
                'background.primary',
                'background.primary',
                'background.secondary',
              ],
            })}
            /* The backround image svg is not the same as in styleguide-rebrush, so be careful when updating! */
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16px' width='46px'><text x='0' y='12px' fill='%238f8f8f' font-size='12px' font-family='-apple-system, system-UI, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'>Anzeige</text></svg>");
            background-position: center center;
            background-repeat: no-repeat;
          }
        `
      : ''}
  ${({ name }) =>
    [
      'T3N_D_Sidebar-1',
      'T3N_D_Incontent-3',
      'T3N_M_Incontent-2',
      'T3N_D_Sidebar-2',
      'T3N_D_Incontent-5',
      'T3N_M_Incontent-4',
      'T3N_D_Sidebar-3',
      'T3N_M_Incontent-2',
      'T3N_D_Incontent-1',
      'T3N_D_Incontent-7',
      'T3N_M_Incontent-6',
      'T3N_D_Incontent-8',
      'T3N_M_Incontent-7',
      'T3N_D_Incontent-9',
      'T3N_M_Incontent-8',
      'T3N_D_Incontent-10',
      'T3N_M_Incontent-9',
    ].includes(name)
      ? css`
          #${name} {
            min-height: 250px;
          }
        `
      : ''}
  ${({ name, forceBackground, theme }) =>
    forceBackground
      ? css`
          #${name} {
            ${color({
              theme,
              bg: [
                'background.primary',
                'background.primary',
                'background.secondary',
              ],
            })}
          }
        `
      : ''}
  ${({ name, forceHint }) =>
    forceHint
      ? css`
          #${name} {
            /* The backround image svg is not the same as in styleguide-rebrush, so be careful when updating! */
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16px' width='46px'><text x='0' y='12px' fill='%238f8f8f' font-size='12px' font-family='-apple-system, system-UI, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'>Anzeige</text></svg>");
            background-position: center center;
            background-repeat: no-repeat;
          }
        `
      : ''}

  /* Mobile overwrites */
  ${({ name, theme }) =>
    ['T3N_D_Sidebar-1', 'T3N_D_Sidebar-2', 'T3N_D_Sidebar-3'].includes(name)
      ? css`
          @media screen and (max-width: ${theme.breakpoints[1]}) {
            #${name} {
              min-height: auto;
              background: transparent;
              background-image: none;
            }
          }
        `
      : ''}
      ${({ name, theme }) =>
    [
      'T3N_M_Incontent-2',
      'T3N_M_Incontent-4',
      'T3N_M_Incontent-1',
      'T3N_M_Incontent-6',
      'T3N_M_Incontent-7',
      'T3N_M_Incontent-8',
      'T3N_M_Incontent-9',
    ].includes(name)
      ? css`
          @media screen and (max-width: ${theme.breakpoints[1]}) {
            #${name} {
              min-height: 250px;
              /* The backround image svg is not the same as in styleguide-rebrush, so be careful when updating! */
              background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16px' width='50px'><text x='0' y='12px' fill='%238f8f8f' font-size='14px' font-family='-apple-system, system-UI, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'>Anzeige</text></svg>");
              background-position: center center;
              background-repeat: no-repeat;
            }
          }
        `
      : ''}
      ${({ name, theme }) =>
    [
      'T3N_D_Sidebar-1',
      'T3N_D_Sidebar-2',
      'T3N_D_Sidebar-3',
      'T3N_M_Incontent-2',
      'T3N_M_Incontent-4',
    ].includes(name)
      ? css`
          @media screen and (max-width: ${theme.breakpoints[1]}) {
            #${name} {
              ${color({
                theme,
                bg: [
                  'background.primary',
                  'background.primary',
                  'background.secondary',
                ],
              })}
            }
          }
        `
      : ''}
      ${({ name, forceBackground, theme }) =>
    forceBackground
      ? css`
          @media screen and (max-width: ${theme.breakpoints[1]}) {
            #${name} {
              ${color({
                theme,
                bg: [
                  'background.primary',
                  'background.primary',
                  'background.secondary',
                ],
              })}
            }
          }
        `
      : ''}
  ${({ name, forceHint, theme }) =>
    forceHint
      ? css`
          @media screen and (max-width: ${theme.breakpoints[1]}) {
            #${name} {
              /* The backround image svg is not the same as in styleguide-rebrush, so be careful when updating! */
              background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16px' width='46px'><text x='0' y='12px' fill='%238f8f8f' font-size='12px' font-family='-apple-system, system-UI, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'>Anzeige</text></svg>");
              background-position: center center;
              background-repeat: no-repeat;
            }
          }
        `
      : ''}
`;

const LegacyAd: React.FC<LegacyAdProps> = ({
  name,
  preview,
  forceBackground = false,
  forceHint = false,
}) => (
  <StyledLegacyAd
    name={name}
    preview={preview}
    forceBackground={forceBackground}
    forceHint={forceHint}
  />
);

export default LegacyAd;
