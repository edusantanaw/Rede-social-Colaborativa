import styled from "styled-components";

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 3em;
  display: flex;
  gap: 1em;
  z-index: 10;
  align-items: flex-end;
  .contacts {
    width: 16em;
    z-index: 3;
    background-color: #fff;
    box-shadow: 0 0 2px #a2a2a2;
    border-radius: 5px 5px 0 0;
    bottom: 0;
    .header {
      padding: 0.5em;
      display: flex;
      align-items: center;
      gap: 1em;
      cursor: pointer;
      border-bottom: 1px solid #a2a2a2;
    }
    img {
      width: 2em;
      height: 2em;
      border-radius: 50%;
    }

    span {
      font-weight: 300;
    }

    .following {
      display: flex;
      li {
        cursor: pointer;
        padding: 0.5em;
        display: flex;
        align-items: center;
        gap: 1em;
      }
    }
  }
`;

export const ChatMessageContainer = styled.div`
  height: 26em;
  width: 20em;
  background-color: #fff;
  z-index: 4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  .head {
    display: flex;
    align-items: center;
    gap: 0.8em;
    padding: 0.5em;
    border-bottom: 1px solid #c2c2c2;
    img {
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
    }
  }

  .messages {
    height: 77.5%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    li {
      padding: 0.5em;
      color: #fff;
      font-family: 300;
      border-radius: 5px;
    }
    .user {
      align-self: flex-end;
      background-color: blue;
    }

    #end {
      padding-top: 1em;
    }
  }

  .send_message {
    width: 100%;
    display: flex;
    align-items: center;
    input {
      width: 80%;
      height: 2.5em;
      padding: 0.5em;
    }
    button {
      width: 20%;
      height: 2.7em;
      border: none;
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }
`;
