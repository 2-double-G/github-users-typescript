import { useContext } from "react";
import { IStore } from "../../interfaces";
import { StoreContext } from "../Store/StoreContext";
import StyledBioRepo from "./BioRepo.styles";

export const BioRepo: React.FC = () => {
  const { state: { user } } = useContext<IStore>(StoreContext);
  
  return (
    <StyledBioRepo>
      <ul>
        <li>
          <div>Repos</div>
          <div>{user!.public_repos}</div>
        </li>
        <li>
          <div>Followers</div>
          <div>{user!.followers}</div>
        </li>
        <li>
          <div>following</div>
          <div>{user!.public_repos}</div>
        </li>
      </ul>
    </StyledBioRepo>
  )
};