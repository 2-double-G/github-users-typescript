import { useContext } from "react";
import { IStore } from "../../interfaces";
import { StoreContext } from "../Store/StoreContext";
import StyledBioText from "./BioText.styles";

export const BioText: React.FC = () => {
  const { state: { user } } = useContext<IStore>(StoreContext);
  
  return (
    user!.bio && (
      <StyledBioText>
        <p>{user!.bio}</p>
      </StyledBioText>)
  )
};