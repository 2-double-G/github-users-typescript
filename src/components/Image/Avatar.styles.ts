import styled from "styled-components";
import { AvatarProps } from './Avatar';

export default styled.div<Pick<AvatarProps, "size">>`
  border-radius: 50%;
  background-color: #f5f8ff;
  padding: 1rem;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;