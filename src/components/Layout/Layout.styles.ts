import styled from "styled-components";

export default styled.div`
  background-color: ${({ theme }) => theme.layout.bg};
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .3s;
`;