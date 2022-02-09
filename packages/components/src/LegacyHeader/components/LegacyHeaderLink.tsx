import styled from 'styled-components';
import { color } from 'styled-system';

const LegacyHeaderLink = styled.a`
  text-decoration: none;
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  &:hover,
  &:focus {
    ${({ theme }) => color({ theme, color: 'text.primary' })};
    text-decoration: none;
  }
`;

export default LegacyHeaderLink;
