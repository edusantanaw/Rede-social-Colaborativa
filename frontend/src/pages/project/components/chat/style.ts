import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  color: #fff;
  .input {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5em;
    input {
      width: 100%;
      height: 3em;
      padding: 1em;
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
      font-weight: 300;
      font-size: 1em;
      color: #c2c2c2;
      letter-spacing: 1.3px;
    }

    p + p {
      padding-top: 0.5em;
    }

    #same_user {
      margin-left: 3.7em;
    }
  }
`;

export const MessageContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;
  .user {
    img {
      width: 2.7em;
      height: 2.7em;
      border-radius: 50%;
    }
  }
  span {
    font-size: 1.1em;
    letter-spacing: 1.5px;
  }
`;
