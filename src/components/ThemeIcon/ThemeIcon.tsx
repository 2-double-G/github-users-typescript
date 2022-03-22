import { IoSunny, IoMoon } from "react-icons/io5";
import StyledThemeIcon from "./ThemeIcon.styles";

interface ThemeIconProps {
  theme: string
}

export const ThemeIcon: React.FC<ThemeIconProps> = ({ theme }) => (
  <StyledThemeIcon>
    {theme === "dark" ? <IoSunny size="20" className="icon-sun" /> : <IoMoon size="20" />}
  </StyledThemeIcon>
);


