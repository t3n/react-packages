import React from 'react';
import styled from 'styled-components';
import {
  ColorProps,
  HeightProps,
  MarginProps,
  position,
  PositionProps,
  space,
  system,
  WidthProps,
} from 'styled-system';

export interface BaseIconProps
  extends React.SVGProps<SVGSVGElement>,
    MarginProps,
    PositionProps {
  component: React.FC<React.SVGProps<SVGSVGElement>>;
}

const BaseIcon = ({
  component: IconComponent,
  width,
  height,
  m,
  margin,
  mt,
  marginTop,
  mb,
  marginBottom,
  ml,
  marginLeft,
  mr,
  marginRight,
  my,
  mx,
  top,
  bottom,
  left,
  right,
  ...props
}: BaseIconProps) => (
  <IconComponent width={undefined} height={undefined} {...props} />
);

export interface IconProps
  extends Omit<BaseIconProps, 'width' | 'height' | 'fill'>,
    WidthProps,
    HeightProps {
  fill?: ColorProps['color'];
}

const Icon = styled(BaseIcon)<IconProps>`
  ${system({
    fill: {
      property: 'fill',
      scale: 'colors',
    },
    width: true,
    height: true,
  })}
  position: relative;
  ${space}
  ${position}
`;

Icon.defaultProps = {
  fill: 'text.primary',
  width: '1.5rem',
};

export default Icon;
