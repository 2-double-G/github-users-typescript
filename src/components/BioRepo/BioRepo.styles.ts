import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 2rem;

  ul {
    display: flex;
    box-sizing: border-box;
    flex-basis: 66.66%;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.repo.bg};
    border-radius: 0.5rem;
  }

  li {
    flex: 1;
    flex-basis: 100%;
    padding: 0 1rem;
    text-align: center;

    div:first-of-type {
      font-size: 14px;
      margin-bottom: 1rem;
    }

    div:last-of-type {
      font-size: 20px;
      font-weight: 600;
      color: ${({ theme }) => theme.header.color};
    }
  }
`;