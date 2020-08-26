import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background-size: cover;
    background-position: center;
    background-image: url(${background});
  }

  #root {
    color: ${({ theme }) => theme.colors.text};
    font-family: "Lato", sans-serif;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 20px 10px;
  }
`;