import { styled } from 'styled-components';
import { color } from 'styled-system';

import Link from './Link';

const HoverLink = styled(Link)`
  display: block;
  background-image: none;

  &:hover,
  &:focus,
  &:active {
    background-image: none;
    color: unset;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${({ theme }) =>
        color({
          theme,
          color: 'text.highlight',
        })}
    }
  }
`;

export default HoverLink;
