import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { UserSearch } from "../UserSearch/UserSearch";
import StyledUserSearchApp from "./UserSearchApp.styles";

export const UserSearchApp = () => (
  <StyledUserSearchApp>
    <Header />
    <UserSearch />
    <Profile />
  </StyledUserSearchApp>
)