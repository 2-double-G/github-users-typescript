/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import StyledAvatar from "./Avatar.styles";

export interface AvatarProps {
  alt?:string
  src: string
  size: number | string
}

export const Avatar: React.FC<AvatarProps> = ({ size, ...props }) => (
  <StyledAvatar size={size}>
    <img {...props} />
  </StyledAvatar>
);