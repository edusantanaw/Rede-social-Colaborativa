import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  position: relative;
  color: #fff;
  .input {
    position: fixed;
    bottom: 0.5em;
    width: 100%;
    padding: 0.5em;
    z-index: 2;
    input {
      background-color: rgba(255, 255, 255, 0.1);
      width: 100%;
      height: 3.5em;
      padding: 1em;
      border: none;
      color: #fff;
      font-weight: 300;
      &:focus {
        outline: none;
      }
    }
  }
  ul {
    overflow: auto;
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 1em;
    height: 80vh;
    li {
      margin-top: 0.8em;
    }

    li:first-child {
      margin-top: 0;
    }

    p {
      font-size: 0.95em;
      color: #e5e5e5;
      font-weight: 300;
    }

    p + p {
      padding-top: 0.1em;
    }

    #same_user {
      margin-left: 3.7em;
    }

    &::-webkit-scrollbar {
      width: 7px;
    }

    /* estilo da área onde a barra de rolagem desliza */
    &::-webkit-scrollbar-track {
      background: rgba(150, 150, 150, 0.1);
    }

    &::-webkit-scrollbar-button {
      background: rgba(150, 150, 150, 0.1);
      height: 100%;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(15, 15, 15);
      border-radius: 10px;
    }
  }

  #robot {
    align-self: center;
  }
`;

export const MessageContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;
  .user {
    img {
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
    }
  }
  span {
    font-size: 1.1em;
    color: rgb(156, 39, 176);
    letter-spacing: 1.5px;
  }
`;
