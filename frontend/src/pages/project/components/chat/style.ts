import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  .input {
    position: absolute;
    bottom: 0.5em;
    width: 100%;
    padding: 0.5em;
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
    display: flex;
    flex-direction: column;
    padding: 1em;

    li + li {
      margin-top: 1em;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 1em;
      color: #c2c5c6;
    }

    p + p {
      padding-top: 0.3em;
    }

    #same_user {
      margin-left: 3.5em;
    }
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
    color: violet;
    letter-spacing: 1.5px;
  }
`;
