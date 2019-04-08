import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, color, ColorProps } from 'styled-system';
import tag from 'clean-tag';
import { Ratio } from '../Ratio';
import { RatioProps } from '../Ratio/Ratio';
import { ThemeProps } from '@t3n/styles';

interface CardHeaderProps extends ColorProps {
  is?: 'div' | 'a';
  big?: boolean;
  ratio?: RatioProps['ratio'];
  image?: string;
  children?: ReactNode;
}

const defaultProps = {
  is: 'div',
  big: false,
  ratio: 'auto',
  color: 'brand.white',
  bg: 'brand.anthracite',
  image: ''
};

export const CardHeaderContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeaderContainer = styled(tag)``;

const CardHeader = ({
  big,
  ratio,
  bg,
  image,
  children,
  ...props
}: CardHeaderProps) => (
  <CardHeaderContainer {...props}>
    <Ratio ratio={ratio}>
      {image && <img src={image} />}
      <CardHeaderContent>{children}</CardHeaderContent>
    </Ratio>
  </CardHeaderContainer>
);

CardHeader.defaultProps = defaultProps;

const padding = ({ big, theme }: CardHeaderProps & ThemeProps): string =>
  big ? space({ p: [3, 6], theme }) : space({ 3: 4, theme });

const backgroundColor = ({ bg, theme }: CardHeaderProps & ThemeProps): string =>
  color({ bg, theme });

const StyledCardHeader = styled(CardHeader)<CardHeaderProps & ThemeProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  ${color}
  ${backgroundColor}

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

StyledCardHeader.displayName = 'CardHeader';
StyledCardHeader.defaultProps = defaultProps as CardHeaderProps;

export default StyledCardHeader;
