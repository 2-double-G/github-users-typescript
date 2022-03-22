import styled from 'styled-components';

export default styled.div`
  margin: 1rem 0;
  border-radius: 0.7rem;
  background-color: ${({ theme }) => theme.card.bg};
  box-shadow: ${({ theme }) => theme.card.bs || "none"};
  transition: background .3s;
`;