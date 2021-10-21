import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: end;

  ul {
    box-sizing: border-box;
    flex-basis: 66.66%;
    display: flex;
    flex-wrap: wrap;

    & * {
      flex-basis: 100%;
      flex: 1;
      padding: 0 0.5rem;
    }
  }

  li {
    box-sizing: border-box;
    padding: 0.5rem 0;
    break-inside: avoid;
    font-size: 14px;
    position: relative;
    padding-left: 1.5rem;

    & * {
      text-overflow: ellipsis;
      max-width: 170px;
      min-height: 15px;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  p {
    display: inline-block;
  }

  a {
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    color: ${({ theme }) => theme.userSearch.color};

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    margin-right: 1rem;
    position: absolute;
    left: -0.1rem;
  }

  @media(max-width: 768px) {
    ul {
      flex-basis: 100%;
    }

    li * {
      max-width: 250px;
    }
  }
`;