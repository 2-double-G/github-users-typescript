import styled from "styled-components";

export default styled.input`
  width: 100%;
  margin: 0 0.5rem;
  padding: 0.5rem;
  outline: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.userSearch.color};
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
`;