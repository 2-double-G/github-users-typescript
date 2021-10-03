import { Header } from "../Header/Header";
import { UserSearch } from "../UserSearch/UserSearch";
import StyledUserSearchApp from "./UserSearchApp.styles";

export const UserSearchApp = () => (
  <StyledUserSearchApp>
    <Header />
    <UserSearch />
  </StyledUserSearchApp>
)