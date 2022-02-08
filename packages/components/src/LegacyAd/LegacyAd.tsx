import React from 'react';
import styled, { css } from 'styled-components';
import { color } from 'styled-system';

import Ad, { AdProps } from '../Ad';

export type LegacyAdName =
  | 'p0'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'p5'
  | 'p6'
  | 'p7'
  | 'p8'
  | 'p11'
  | 'p12'
  | 'p13'
  | 'p14'
  | 'p15'
  | 'p16'
  | 'p17'
  | 'p18'
  | 'p19'
  | 'p20';

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
    name === 'p0'
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
    name === 'p1'
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
    name === 'p2'
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
    ['p0', 'p4', 'p6', 'p8', 'p13', 'p14', 'p16', 'p17', 'p18', 'p19'].includes(
      name
    )
      ? css`
          #${name} {
            text-align: center;
          }
        `
      : ''}
  ${({ name }) =>
    [
      'p3',
      'p4',
      'p5',
      'p6',
      'p7',
      'p8',
      'p11',
      'p13',
      'p16',
      'p17',
      'p18',
      'p19',
    ].includes(name)
      ? css`
          #${name} {
            margin-bottom: 20px;
          }
        `
      : ''}
  ${({ name }) =>
    ['p4', 'p6', 'p8', 'p11', 'p13', 'p16', 'p17', 'p18', 'p19'].includes(name)
      ? css`
          #${name} {
            margin-top: 20px;
          }
        `
      : ''}
  ${({ name, theme }) =>
    ['p3', 'p5', 'p7', 'p3', 'p4', 'p6'].includes(name)
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
    ['p3', 'p4', 'p5', 'p6', 'p7', 'p13', 'p16', 'p17', 'p18', 'p19'].includes(
      name
    )
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
    ['p1', 'p3', 'p5', 'p7', 'p3'].includes(name)
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
    ['p4', 'p6', 'p13', 'p16', 'p17', 'p18', 'p19'].includes(name)
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
    ['p3', 'p5', 'p7', 'p3', 'p4', 'p6'].includes(name)
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
