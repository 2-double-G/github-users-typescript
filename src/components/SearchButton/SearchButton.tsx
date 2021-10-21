import { useContext } from "react";
import { getUser } from "../../api/getUser";
import { IStore } from "../../interfaces";
import { StoreContext } from "../Store/StoreContext";
import StyledSerchButton from "./SerachButton.styles";

export const SearchButton: React.FC = () => {
  const { state: { input }, dispatch } = useContext<IStore>(StoreContext);

  const handleClick = () => {
    getUser(dispatch, input);
  }

  return (
    <StyledSerchButton onClick={handleClick} >Search</StyledSerchButton>
  )
}