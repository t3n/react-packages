import { ReactNode } from 'react';
import styled from 'styled-components';
import tag from 'clean-tag';

export interface RatioProps extends ThemeProps {
  ratio: 'auto' | number;
  is: string;
  children?: ReactNode;
}

const Ratio = styled(tag)<RatioProps>`
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
  ratio: 16 / 9,
  is: 'div'
};

export default Ratio;
