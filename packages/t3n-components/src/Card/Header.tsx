import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, color, ColorProps } from 'styled-system';

import { ThemeProps } from '@t3n/styles';
import { Ratio, RatioProps } from '../Ratio';

interface CardHeaderProps extends ThemeProps {
  as?: 'div' | 'a';
  big?: boolean;
  ratio?: RatioProps['ratio'];
  bg?: ColorProps['bg'];
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

const CardHeader = ({
  big, // eslint-disable-line @typescript-eslint/no-unused-vars
  ratio,
  bg, // eslint-disable-line @typescript-eslint/no-unused-vars
  image,
  children,
  ...props
}: CardHeaderProps) => (
  <CardHeaderContainer {...props}>
    <Ratio ratio={ratio}>
      {image && <img src={image} alt="" />}
      <CardHeaderContent>{children}</CardHeaderContent>
    </Ratio>
  </CardHeaderContainer>
);

const padding = ({ big, theme }: CardHeaderProps): string =>
  big ? space({ p: [3, 6], theme }) : space({ 3: 4, theme });

const StyledCardHeader = styled(CardHeader)<CardHeaderProps>`
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

StyledCardHeader.defaultProps = {
  bg: 'brand.anthracite'
};
StyledCardHeader.displayName = 'CardHeader';

export default StyledCardHeader;
