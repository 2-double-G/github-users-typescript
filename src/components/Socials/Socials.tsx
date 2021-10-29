import { useContext } from "react";
import { IoLocationSharp, IoLink, IoLogoTwitter, IoBusiness } from "react-icons/io5";
import { IStore } from "../../interfaces";
import { StoreContext } from "../Store/StoreContext";
import StyledSocials from "./Socials.styles";
import { isValidURL } from './helpers/isValidURL';

export const Socials: React.FC = () => {
  const { state: { user } } = useContext<IStore>(StoreContext);
  
  return (
    <StyledSocials>
      <ul>
        <div>
          <li>
            <IoLocationSharp />
            <p>{user!.location || "Not Available"}</p>
          </li>
          <li>
            <IoLink />
            {user!.blog ? <a
              target="_blank"
              href={isValidURL(user!.blog)}
              rel="noopener noreferrer"
            >
              {user!.blog}
            </a> : "Not Available"}
          </li>
        </div>
        <div>
          <li>
            <IoLogoTwitter />
            {user!.twitter_username ? <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${user!.twitter_username}`}
            >
              {user!.twitter_username}
            </a> : "Not Available"}
          </li>
          <li>
            <IoBusiness />
            {user!.company || "Not Available"}
          </li>
        </div>
      </ul>
    </StyledSocials>
  )
};