import styled, { createGlobalStyle } from "styled-components";



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
}
`;
