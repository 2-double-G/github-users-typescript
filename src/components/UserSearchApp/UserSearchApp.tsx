import { useContext } from "react";
import { IStore } from "../../interfaces";
import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { StoreContext } from "../Store/StoreContext";
import { UserSearch } from "../UserSearch/UserSearch";
import StyledUserSearchApp from "./UserSearchApp.styles";

export const UserSearchApp = () => {
  const { state: { user, error } } = useContext<IStore>(StoreContext);
  
  return (
    <StyledUserSearchApp>
      <Header />
      <UserSearch />
      {user && !error ? <Profile />  : "No search result"}
    </StyledUserSearchApp>
  )
};