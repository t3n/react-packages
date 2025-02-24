import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Image from '../Image';
import Ratio, { RatioProps } from '../Ratio';

export interface CardHeaderProps extends ThemeProps {
  as?: 'div' | 'a';
  big?: boolean;
  ratio?: RatioProps['ratio'] | 'auto';
  color?: string;
  image?: string;
  children?: ReactNode;
}

export const CardHeaderContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeaderContainer = styled.div``;

const CardHeaderComponent = ({
  big,
  ratio,
  image,
  children,
  ...props
}: CardHeaderProps) => (
  <CardHeaderContainer {...props}>
    <Ratio ratio={ratio}>
      {image && <Image src={image} alt="" />}
      <CardHeaderContent>{children}</CardHeaderContent>
    </Ratio>
  </CardHeaderContainer>
);

const padding = ({ big, theme }: CardHeaderProps): string =>
  big ? space({ p: [4, 7], theme }) : space({ 3: 5, theme });

const CardHeader = styled(CardHeaderComponent)<CardHeaderProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  ${color}

  > ${Ratio} {
    width: 100%;
    display: flex;
    align-items: stretch;

    > img:first-child {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    > ${CardHeaderContent} {
      ${padding}
    }
  }
`;

CardHeader.displayName = 'CardHeader';

export default CardHeader;
