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
        background-color: rgb(25, 25, 25);
    }

    html, body {
        min-height: 100vh;
        &::-webkit-scrollbar {
            width: 7px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(150, 150, 150, 0.1);
        }

        &::-webkit-scrollbar-button {
            background: rgba(150, 150, 150, 0.1);
        }

         &::-webkit-scrollbar-thumb {
             background: rgb(15, 15, 15);
            border-radius: 10px;
        }
    }
`;

export const FlexSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; ;
`;
