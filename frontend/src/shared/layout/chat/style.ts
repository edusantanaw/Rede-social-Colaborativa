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
    background-color: rgb(10, 10, 10);
    color: #fff;
    box-shadow: 0 0 2px #a2a2a2;
    border-radius: 5px 5px 0 0;
    bottom: 0;
    .header {
      padding: 0.5em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      border-bottom: 1px solid #a2a2a2;

      div {
        display: flex;
        align-items: center;
        gap: 1em;
      }

      svg {
        font-size: 1.3em;
      }
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

    span {
      font-weight: 300;
      text-align: center;
      width: 100%;
      font-size: 0.9em;
    }
  }
  .search {
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    label {
      font-size: 1em;
      font-weight: 300;
    }

    input {
      width: 100%;
      height: 2.5em;
      border-radius: 5px;
      padding: 0.5em;
    }
  }
`;

export const ChatMessageContainer = styled.div`
  height: 26em;
  width: 20em;
  background-color: rgb(10, 10, 10);
  color: #fff;
  z-index: 4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
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
    }
    .user {
      align-self: flex-end;
      background-color: blueviolet;
    }

    .contact {
      background-color: #a2a2a2;
      align-self: flex-start;
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
      width: 20em;
      height: 2.5em;
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
      height: 2.7em;
      width: 4em;
      border: none;
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff;
      cursor: pointer;
    }
  }
`;
