import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0%;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;


export const FlexSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;;
`