import styled from 'styled-components';
import { color } from 'styled-system';

// eslint-disable-next-line import/prefer-default-export
export const HeaderLink = styled.a`
  text-decoration: none;
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  &:hover,
  &:focus {
    ${({ theme }) => color({ theme, color: 'text.primary' })};
    text-decoration: none;
  }
`;
