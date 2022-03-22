import styled from "styled-components";

export default styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  div {
    padding: 0 0.5rem;
  }

  div:first-of-type{
    flex-basis: 33.33%;
    position: relative;

    div {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  div:last-of-type {
    flex-basis: 66.66%;
    display: flex;

    & * {
      flex: 1;
      flex-basis: 100%;
    }
  }

  h2, a, time {
    padding: 0.5rem 0;
  }

  h2 {
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme }) => theme.header.color};
  }

  a {
    text-decoration: none;
    color: #3164a6;

    &:hover {
      text-decoration: underline;
    }
  }

  time {
    text-align: end;
    font-size: 14px;
  }

  @media(max-width: 768px) {
    margin-bottom: 1rem;

    div:last-of-type {
      flex-direction: column;
    }

    time {
      text-align: start;
    }
  }
`;