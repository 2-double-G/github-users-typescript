import styled from "styled-components";
import { Button } from "../Button/Button";

export default styled(Button)`
  color: white;
  background-color: rgb(1, 123, 249);
  padding: 1rem 1.5rem;
  font-size: 16px;

  &:hover {
    background-color: rgba(1, 123, 249, 0.7);
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(1, 123, 249, 0.5);
  }
`;