import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import StylesLayout from "./Layout.styles";
import GlobalStyle from "../../styles/global";
import { StoreContext } from '../Store/StoreContext';
import { IStore } from '../../interfaces';
import { mode } from '../../styles/mode';

interface LayoutProps {
  children?: React.ReactChild | React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { state: { theme } } = useContext<IStore>(StoreContext);

  return (
    <ThemeProvider theme={mode[theme]}>
      <StylesLayout>{children}</StylesLayout>
      <GlobalStyle />
    </ThemeProvider>
  )
}