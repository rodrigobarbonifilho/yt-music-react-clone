import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root {
    --neutral-900: #020202;
    --neutral-800: #272727;
    --neutral-700: #444444;
    --neutral-600: #565656;
    --neutral-500: #7d7d7d;
    --neutral-400: #9f9f9f;
    --neutral-300: #c5c5c5;
    --neutral-200: #dadada;
    --neutral-100: #e9e9e9;
    --neutral-50:  #f5f5f5;
  }

  body {
    height: 100vh;
    background-color: var(--neutral-900);
    color: var(--neutral-50);
  }
`