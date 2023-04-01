import styled from "styled-components";

export const UserContainer = styled.li`
    width: 100%;
    background-color: rgb(15, 15, 15);
    padding: 1em;
    border-radius: 10px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: #fff;
        display: flex;
        gap: 1em;
        span {
            margin-top: 0.5em;
            font-size: 1.4em;
        }
    }
    img {
        border-radius: 50%;
        width: 5em;
        height: 5em;
        object-fit: cover;
    }

    button {
        width: 10em;
        height: 3em;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
 }
`