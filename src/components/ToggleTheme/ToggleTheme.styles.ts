import styled from 'styled-components';
import { Button } from '../Button/Button';

export default styled(Button)`
  color: ${({ theme }) => theme.userSearch.color};
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.themeButton.bgHover || "none"};
    color: ${({ theme }) => theme.themeButton.colorHover || "inherit"}
  }

  &:hover .icon-sun {
    animation-name: spin;
    animation-duration: 8000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
  }

  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }
`;