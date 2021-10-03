import StyledBioMain from "./BioMain.styles";
import { Avatar } from '../Image/Avatar';
import Octocat from "../../assets/images/Octocat.png"

export const BioMain: React.FC = () => (
  <StyledBioMain>
    <div>
      <Avatar src={Octocat} alt="user-avatar" size="80" />
    </div>
    <div>
      <div>
        <h2>The Octocat</h2>
        <a href="/">@octocat</a>
      </div>
      <div>
        <time>Joined 25 Jan 2011</time>
      </div>
    </div>
  </StyledBioMain>
)