import { useContext } from "react";
import { IStore } from "../../interfaces";
import { StoreContext } from "../Store/StoreContext";
import { Types } from '../../store/types';
import StyledToggle from "./ToggleTheme.styles";
import { ThemeIcon } from "../ThemeIcon/ThemeIcon";
import { displayTheme } from "./helpers";


export const ToggleTheme = () => {
  const { state: { theme }, dispatch } = useContext<IStore>(StoreContext);

  const toggleHandler = () => {
    const type = theme === "light" ? Types.Dark : Types.Light

    dispatch({ type });
  }

  return (
    <StyledToggle onClick={toggleHandler}>
      {displayTheme(theme)}
      <ThemeIcon theme={theme} />
    </StyledToggle>
  )
}