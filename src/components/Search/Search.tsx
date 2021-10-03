import StyledSearch from "./Search.styles";

export const Search: React.FC = () => {
  
  return (
    <StyledSearch
      id="user"
      type="text"
      placeholder="Search GitHub username..."
    />
  )
}