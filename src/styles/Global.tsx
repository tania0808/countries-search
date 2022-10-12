import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "./styled.d";

type GlobalThemeProps = {
    theme: ThemeProps
}

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  overflow-x: hidden;
  background: ${({ theme }: GlobalThemeProps) => theme.background};
  color: ${({ theme }: GlobalThemeProps) => theme.text};
}

a {
  text-decoration: none;
  color: ${({ theme }: GlobalThemeProps) => theme.text};
}

`;
