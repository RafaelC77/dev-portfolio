import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme["black"]};
        color: ${(props) => props.theme["gray-light"]};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: "Barlow", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
