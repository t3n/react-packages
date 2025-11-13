import React from 'react';
import styled from 'styled-components';
import { color, layout, MarginProps, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Button from '../Button';
import Icon from '../Icon';
import { Tooltip, TooltipContainer } from '../LegacyBookmark';

export interface LegacyBigRoundButtonProps extends MarginProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
  tooltipText: string;
  rel?: string;
}

const MarginTopTooltip = styled(Tooltip)`
  ${({ theme }) => space({ theme, mt: 3 })};
`;

const BigRoundButton = styled(Button)`
  border-radius: 100%;
  border: unset;
  ${({ theme }) => space({ p: '10px', theme })};
  ${({ theme }) => color({ theme, bg: 'background.secondary' })}
  ${({ theme }) => layout({ theme, width: '40px', height: '40px' })};

  > svg,
  > svg > path:first-child {
    ${({ theme }) => layout({ theme, width: '24px', height: '24px' })};
    fill: #2a2a2a !important;
  }

  &:hover:not(:disabled) {
    ${({ theme }) => color({ theme, bg: 'background.inverse' })};
    transform: scale(1.3);

    > svg,
    > svg > path:first-child {
      fill: ${({ theme }: ThemeProps) => theme.colors.text.inverse} !important;
    }

    > svg > path:nth-child(2) {
      fill: ${({ theme }: ThemeProps) => theme.colors.text.primary} !important;
    }
  }
`;

const LegacyBigRoundButton = ({
  icon,
  url,
  tooltipText,
  rel,
  ...marginProps
}: LegacyBigRoundButtonProps) => {
  return (
    <TooltipContainer
      display="inline-block"
      position="relative"
      {...marginProps}
    >
      <BigRoundButton href={url} rel={rel}>
        <Icon component={icon} />
      </BigRoundButton>
      <MarginTopTooltip>{tooltipText}</MarginTopTooltip>
    </TooltipContainer>
  );
};

export default LegacyBigRoundButton;
