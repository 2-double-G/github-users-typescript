import { BioMain } from "../BioMain/BioMain";
import { BioRepo } from "../BioRepo/BioRepo";
import { BioText } from "../BioText/BioText";
import { Socials } from "../Socials/Socials";
import StyledBio from "./Bio.styles";

export const Bio: React.FC = () => {


  return (
    <StyledBio>
      <BioMain />
      <BioText />
      <BioRepo />
      <Socials />
    </StyledBio>
  )
}