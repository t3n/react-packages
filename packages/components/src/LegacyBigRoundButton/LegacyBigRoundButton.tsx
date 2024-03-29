import React from 'react';
import styled from 'styled-components';
import { color, layout, MarginProps, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Button from '../Button';
import Icon from '../Icon';
import { Tooltip, TooltipContainer } from '../LegacyNewsCard/LegacyBookmark';

export interface LegacyBigRoundButtonProps extends MarginProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
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
  ${({ theme }) => layout({ theme, width: '50px', height: '50px' })};

  > svg {
    ${({ theme }) => layout({ theme, width: '25px', height: '25px' })};
    fill: #5f5f5f !important;
  }

  &:hover:not(:disabled) {
    ${({ theme }) => color({ theme, bg: 'background.inverse' })};
    transform: scale(1.3);

    > svg {
      fill: ${({ theme }: ThemeProps) => theme.colors.text.inverse} !important;
    }
  }
`;

const LegacyBigRoundButton: React.FC<LegacyBigRoundButtonProps> = ({
  icon,
  url,
  tooltipText,
  rel,
  ...marginProps
}) => {
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
