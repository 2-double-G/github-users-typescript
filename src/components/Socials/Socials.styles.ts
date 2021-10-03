import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: end;

  ul {
    box-sizing: border-box;
    flex-basis: 66.66%;
    columns: 150px;
    column-gap: 30px;

    & * {
      flex-basis: 100%;
      flex: 1;
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
      max-width: 165px;
      min-height: 15px;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  p {
    display: inline-block;
  }

  a {
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
`;