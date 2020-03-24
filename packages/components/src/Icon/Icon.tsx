import React from 'react';
import styled from 'styled-components';
import {
  system,
  space,
  position,
  WidthProps,
  HeightProps,
  ColorProps,
  MarginProps,
  PositionProps,
} from 'styled-system';

export interface BaseIconProps
  extends React.SVGProps<SVGSVGElement>,
    MarginProps,
    PositionProps {
  component: React.FunctionComponent<React.SVGProps<SVGElement>>;
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

export const Icon = styled(BaseIcon)<IconProps>`
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
