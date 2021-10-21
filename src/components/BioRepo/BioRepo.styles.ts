import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 2rem;

  ul {
    display: flex;
    box-sizing: border-box;
    flex-basis: 66.66%;
    padding: 1.5rem 1rem;
    background-color: ${({ theme }) => theme.repo.bg};
    border-radius: 0.5rem;
  }

  li {
    flex: 1;
    flex-basis: 100%;
    padding: 0 0.5rem;
    text-align: center;

    div:first-of-type {
      font-size: calc(14px + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
      margin-bottom: 1rem;
    }

    div:last-of-type {
      font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
      font-weight: 600;
      color: ${({ theme }) => theme.header.color};
    }
  }

  @media(max-width: 768px) {
    ul {
      flex-basis: 100%;
    }
  }
`;