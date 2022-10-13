import { ThemeProvider } from "styled-components";
import useThemeMode from "../hooks/useThemeMode";
import { GlobalStyles } from "../styles/Global";
import { darkTheme, lightTheme } from "../styles/theme";

import { Header } from "../components/Header/Header";
import { Container } from "../components/Container/Container.styled";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Cards } from "../layouts/Cards";

export const Home = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header>
        <Header.Logo>
          <p>Where in the world ?</p>
        </Header.Logo>
        <Header.ToggleButton themeToggler={themeToggler} />
      </Header>
      <Container>
        <SearchBar>
          <SearchBar.Input />
          <SearchBar.Filter />
        </SearchBar>
        <Cards />
      </Container>
    </ThemeProvider>
  );
};
