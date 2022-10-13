import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Header } from "../components/Header/Header";
import { darkTheme, lightTheme } from "../styles/theme";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "../components/Button";
import { ThemeProvider } from "styled-components";
import { Container } from "../components/Container/Container.styled";
import { GlobalStyles } from "../styles/Global";
import useThemeMode from "../hooks/useThemeMode";
import { Link } from "react-router-dom";
import { CountryDetails } from "../components/CountryDetails";

export const About = () => {
  const baseUrl = "https://restcountries.com/v3.1";
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const { id } = useParams();
  const { data, fetchUrl } = useFetch(baseUrl, `alpha/${id}`);

  useEffect(() => {
    fetchUrl(`alpha/${id}`);
  }, [id]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header>
        <Header.Logo>
          <p>Where in the world ?</p>
        </Header.Logo>
        <Header.ToggleButton themeToggler={themeToggler} />
      </Header>
      {data ? (
        <Container>
          <Link to="/">
            <Button buttonText="Back">
              <BiArrowBack />
            </Button>
          </Link>
          <CountryDetails
            details={data}
            src={data[0].flags.svg}
            alt={data[0].name.common}
          />
        </Container>
      ) : (
        <h1>Loading ...</h1>
      )}
    </ThemeProvider>
  );
};
