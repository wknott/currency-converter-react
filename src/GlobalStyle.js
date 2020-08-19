import { createGlobalStyle } from "styled-components";

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
    background-image: url("./background.png");
  }

  #root {
    color: #222;
    font-family: "Lato", sans-serif;
  }

  @media (max-width: 767px) {
    #root {
      padding: 20px 10px;
    }
  }
`;