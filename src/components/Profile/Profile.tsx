import { Bio } from "../Bio/Bio";
import { Card } from "../Card/Card";
import StyledProfile from "./Profile.styles";

export const Profile: React.FC = () => {

  return (
    <Card>
      <StyledProfile>
        <Bio />
      </StyledProfile>
    </Card>
  )
}