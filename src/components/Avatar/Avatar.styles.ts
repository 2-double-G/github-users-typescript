import styled from "styled-components";

export default styled.div`
  img {
    display: block;
    width: 130px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media(max-width: 768px) {
    img {
    width: 90px;
    }
  }
`;