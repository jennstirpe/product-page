import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Kumbh Sans', sans-serif;
    }

    body {
        height: 100vh;
        width: 100vw;
        color: ${({theme}) => theme.mainText};
        position: absolute;
    }

`;

export default GlobalStyles