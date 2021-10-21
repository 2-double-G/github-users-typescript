import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: end;
  padding: 1.5rem 0;
  font-size: 14px;

  p {
    flex-basis: 66.66%;
    line-height: 1.5;
  }

  @media(max-width: 768px) {
    p {
    flex-basis: 100%;
    }
  }
`;