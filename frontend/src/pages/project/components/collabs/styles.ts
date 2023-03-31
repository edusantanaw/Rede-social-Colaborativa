import styled from "styled-components";

export const CollabContainer = styled.div`
  padding: 1em;
  position: relative;
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;

    li {
      background-color: rgb(15, 15, 15);
      padding: 1.5em 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3em;
      border-radius: 15px;
      span {
        font-size: 1em;
        font-weight: 300;
        color: #fff;
      }
      img {
        width: 5em;
        height: 5em;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  .add {
    background-color: #9c27b0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 2em;
    right: 2em;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    cursor: pointer;
    transition: 0.1s;
    filter: contrast(1.1);
    svg {
      font-size: 2em;
      color: #fff;
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Contacts = styled.div`
  bottom: 8em;
  background-color: rgb(15, 15, 15);
  width: 23em;
  height: 25em;
  padding: 1em;
  z-index: 2;
  border-radius: 20px;
  ul {
    li {
        all: unset;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 0.5em;
        img {
            width: 2.5em;
            height: 2.5em;
        }

        span{
            max-width: 8em;
        }

        button {
            width: 9em;
            height: 2.5em;
            border: 0;
            border-radius: 4px;
            background-color: #9c27b0;
            color: #fff;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5em;
            svg{
                font-size: 0.9em;
            }
        }
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

`;
