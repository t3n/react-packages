import React from 'react';
import styled, { css } from 'styled-components';

import { Ad, AdProps } from '../Ad';

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
}

const StyledLegacyAd = styled(Ad)<AdProps>`
  a:hover {
    border: none !important;
  }

  ${({ name }) =>
    name === 'p1'
      ? css`
          padding: 5px;
          position: relative;
          z-index: 10;
          min-height: 90px;
        `
      : ''}
  ${({ name }) =>
    name === 'p2'
      ? css`
          position: absolute;
          top: 0;
          left: 61.25rem;
          z-index: 12;
        `
      : ''}
  ${({ name }) =>
    ['p0', 'p1', 'p4', 'p6', 'p8', 'p13', 'p14'].includes(name)
      ? css`
          text-align: center;
        `
      : ''}
  ${({ name }) =>
    ['p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p11', 'p13'].includes(name)
      ? css`
          margin-bottom: 20px;
        `
      : ''}
  ${({ name }) =>
    ['p3', 'p4', 'p6', 'p8', 'p11', 'p13'].includes(name)
      ? css`
          margin-top: 20px;
        `
      : ''}
`;

// eslint-disable-next-line import/prefer-default-export
export const LegacyAd: React.FC<LegacyAdProps> = ({ name, preview }) => (
  <StyledLegacyAd name={name} preview={preview} />
);
