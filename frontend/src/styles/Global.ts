import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0%;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    a {
        text-decoration: none;
        color: #fff;
    }

    li {
        list-style: none;
    }
    body {
        background-color: #DFDCDC;
    }
`;


export const FlexSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;;
`