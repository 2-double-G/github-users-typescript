import { IoLocationSharp, IoLink, IoLogoTwitter, IoBusiness } from "react-icons/io5";
import StyledSocials from "./Socials.styles";

export const Socials: React.FC = () => (
  <StyledSocials>
    <ul>
      <li>
        <IoLocationSharp />
        <p>San Francisco</p>
      </li>
      <li>
        <IoLink />
        <a
          target="_blank"
          href="https://githab.blog"
          rel="noopener noreferrer"
        >
          https://githab.blog
        </a>
      </li>
      <li>
        <IoLogoTwitter />
        <a
          target="_blank"
          href="https://githab.blog"
          rel="noopener noreferrer"
        >
          Not Available
        </a>
      </li>
      <li>
        <IoBusiness />
        <a
          target="_blank"
          href="https://githab.blog"
          rel="noopener noreferrer"
        >
         @githab
        </a>
      </li>
    </ul>
  </StyledSocials>
)