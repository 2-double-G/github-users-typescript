import StyledCard from "./Card.styles";

interface CardProps {
  children?: React.ReactChild | React.ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => <StyledCard>{children}</StyledCard>