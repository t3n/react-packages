import { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/styles';

export interface RatioProps extends ThemeProps {
  ratio?: 'auto' | number;
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
}

const Ratio = styled.div<RatioProps>`
  ${({ ratio }: RatioProps) =>
    ratio === 'auto'
      ? ''
      : `
    &:before {
      content: '';
      float: left;
      width: 0;
      height: 0;
      padding-bottom: ${100 / Number(ratio)}%;
    }

    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `}
`;

Ratio.defaultProps = {
  ratio: 16 / 9
};
Ratio.displayName = 'Ratio';

export default Ratio;
