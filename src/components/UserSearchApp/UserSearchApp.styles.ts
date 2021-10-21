import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: 700px;
  padding: 2rem;
  color: ${({ theme }) => theme.userSearch.color};
  font-family: 'Roboto Mono', monospace;
  transition: all .3s;
`;