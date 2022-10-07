import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme, darkTheme, whiteTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={whiteTheme}>
      <GlobalStyles />
      hello
    </ThemeProvider>
  );
}

export default App;
