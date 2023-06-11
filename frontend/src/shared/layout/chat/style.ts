import styled from "styled-components";

export const ChatContainer = styled.div`
   background-color: rgb(20, 20, 20);
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
  transition: 0.2s;
  svg {
    font-size: 1.5em;
    color: #fff;
  }
  &:hover {
    filter: contrast(1.1);
  }
`;

export const ChatMessageContainer = styled.div`
  height: 26em;
  width: 20em;
  background-color: rgb(20, 20, 20);
  position: fixed;
  color: #fff;
  z-index: 4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  right: 7em;
  bottom: 0;
  box-shadow: 0 0 1px 1px rgb(30, 30, 30);
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    border-bottom: 1px solid #c2c2c2;
    .head_user {
      display: flex;
      align-items: center;
      gap: 0.8em;
    }
    img {
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
    }

    svg {
      font-size: 1.3em;
      cursor: pointer;
    }
  }

  .messages {
    height: 77.5%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    padding: 0.5em;
    li {
      padding: 0.5em;
      color: #fff;
      font-family: 300;
      border-radius: 5px;
      max-width: 70%;
      p {
        overflow: hidden;
      }
    }
    .user {
      align-self: flex-end;
      background-color: #d84f53;
    }

    .contact {
      background-color: #a2a2a2;
      align-self: flex-start;
    }

    #end {
      padding-top: 1em;
    }
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: rgb(0, 0, 0);
      height: 100%;
    }

    &::-webkit-scrollbar-button {
      background: rgba(0, 0, 0);
      height: 100%;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(25, 25, 25);
      border-radius: 10px;
    }
  }

  .send_message {
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 2.5em;
    #message_input {
      width: 20em;
      min-height: 100%;
      max-height: 4em;
      padding: 0.5em;
      border: none;
      background-color: rgba(255, 255, 255, 0.1);
      height: 100%;
      color: #fff;
      &:focus {
        outline: none;
      }
    }
    button {
      height: 100%;
      width: 4em;
      border: none;
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff;
      cursor: pointer;
    }
  }
`;
