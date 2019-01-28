import styled from 'styled-components';

const borderRadius = ({ theme }) => theme.border.radii[1];

const Card = styled.div`
  border-radius: ${borderRadius};
  background-color: white;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export default Card;
