import { IoSunny, IoMoon } from "react-icons/io5";
import StyledIcon from "./Icon.styles";

interface IconProps {
  theme: string
}

export const Icon: React.FC<IconProps> = ({ theme }) => (
  <StyledIcon>
    {theme === "dark" ? <IoSunny size="20" className="icon-sun" /> : <IoMoon size="20" />}
  </StyledIcon>
);