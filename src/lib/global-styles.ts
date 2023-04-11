import "../lib/assets/fonts/inter/inter.css";
import "../lib/assets/fonts/jetbrains-mono/jetbrains-mono.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    overflow-y: visible;
  }
`;


export default GlobalStyles