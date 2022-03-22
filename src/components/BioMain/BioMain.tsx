import StyledBioMain from "./BioMain.styles";
import { Avatar } from '../Avatar/Avatar';
import Octocat from "../../assets/images/Octocat.png"
import { useContext } from "react";
import { IStore } from "../../interfaces";
import { StoreContext } from "../Store/StoreContext";
import { parseDate } from "./helpers/parseDate";

export const BioMain: React.FC = () => {
  const { state: { user } } = useContext<IStore>(StoreContext);

  return (
    <StyledBioMain>
      <div>
        <Avatar src={user?.avatar_url || Octocat} alt="user-avatar" />
      </div>
      <div>
        <div>
          <h2>{user!.name}</h2>
          <a
            href={user!.html_url}
            target='_blank'
            rel='noreferrer noopener'
          >
            {user!.login}
          </a>
        </div>
        <div>
          <time>Joined { parseDate(user?.created_at)}</time>
        </div>
      </div>
    </StyledBioMain>
  )
};