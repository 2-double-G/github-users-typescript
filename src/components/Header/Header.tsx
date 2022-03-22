import { ToggleTheme } from "../ToggleTheme/ToggleTheme";
import StyledHeader from "./Header.styles";

export const Header: React.FC = () => (
  <StyledHeader>
    <h1>devfinder</h1>
    <ToggleTheme />
  </StyledHeader>
)