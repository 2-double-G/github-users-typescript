import StyledButton from "./Button.styles";

interface ButtonProps {
  children?: React.ReactNode | React.ReactChild
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)