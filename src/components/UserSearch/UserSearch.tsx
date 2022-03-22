import { IoSearch } from "react-icons/io5";
import { Card } from "../Card/Card";
import UserStyledSearch from "./UserSearch.styles";
import { Search } from '../Search/Search';
import { SearchButton } from "../SearchButton/SearchButton";

export const UserSearch: React.FC = () => (
  <Card>
    <UserStyledSearch>
      <IoSearch size="30" />
      <Search />
      <SearchButton />
    </UserStyledSearch>
  </Card>
);