import { styled } from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps, ColorProps, LayoutProps, FlexboxProps, PositionProps {}

// Liste aller styled-system Props, die nicht an DOM weitergegeben werden sollen
const styledSystemProps = [
  // SpaceProps
  'm',
  'margin',
  'mt',
  'marginTop',
  'mr',
  'marginRight',
  'mb',
  'marginBottom',
  'ml',
  'marginLeft',
  'mx',
  'marginX',
  'my',
  'marginY',
  'p',
  'padding',
  'pt',
  'paddingTop',
  'pr',
  'paddingRight',
  'pb',
  'paddingBottom',
  'pl',
  'paddingLeft',
  'px',
  'paddingX',
  'py',
  'paddingY',
  // ColorProps
  'color',
  'backgroundColor',
  'bg',
  'opacity',
  // LayoutProps
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'size',
  'display',
  'verticalAlign',
  'overflow',
  'overflowX',
  'overflowY',
  // FlexboxProps
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
  // PositionProps
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
];

const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => !styledSystemProps.includes(prop),
})<BoxProps>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${position}
`;

export default Box;
