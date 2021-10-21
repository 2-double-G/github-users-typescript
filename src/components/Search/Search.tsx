import { useEffect, useRef, useContext } from "react";
import { IStore } from "../../interfaces";
import { StoreContext } from "../Store/StoreContext";
import StyledSearch from "./Search.styles";
import { Types } from '../../store/types';
import { getUser } from "../../api/getUser";

export const Search: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null!);
  const { state: { input }, dispatch } = useContext<IStore>(StoreContext);

  useEffect(() => {
    ref.current.focus();
  }, [])

  
  const handleKeyPress = ({ key }: React.KeyboardEvent) => {
    if (key === "Enter") getUser(dispatch, input);
  }

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: Types.SetInput, input: value });
  
  return (
    <StyledSearch
      ref={ref}
      id="user"
      type="text"
      value={input}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder="Search GitHub username..."
    />
  )
}
