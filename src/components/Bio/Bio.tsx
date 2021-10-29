import { BioMain } from "../BioMain/BioMain";
import { BioRepo } from "../BioRepo/BioRepo";
import { BioText } from "../BioText/BioText";
import { Socials } from "../Socials/Socials";

export const Bio: React.FC = () => (
  <div>
    <BioMain />
    <BioText />
    <BioRepo />
    <Socials />
  </div>
);