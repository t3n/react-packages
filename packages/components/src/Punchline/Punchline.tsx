import styled from 'styled-components';
import { space, typography, color } from 'styled-system';
import { Heading } from '../Heading';

export const Punchline = styled(Heading)`
  ${({ theme }) =>
    typography({
      theme,
      fontSize: [8, '3rem', '3.5rem', '4rem'],
      textAlign: 'left',
      lineHeight: ['1.5em', '1.5em', '1.6em', '1.6em']
    })};
  ${({ theme }) => space({ theme, pb: [0, 0, 1, 1] })};
  ${({ theme }) => color({ theme, color: 'text.inverse', bg: 'shades.black' })};

  box-shadow: 0.625rem 0 0 #000, -0.625rem 0 0 #000;
  display: inline;
`;
