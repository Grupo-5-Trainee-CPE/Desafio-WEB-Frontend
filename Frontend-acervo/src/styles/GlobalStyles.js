import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "../styles/stylesVariables";

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${fonts.Roboto};
    font-size: 15px;
    background-color: ${colors.black.background}; 
    color: ${colors.yellow};
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;