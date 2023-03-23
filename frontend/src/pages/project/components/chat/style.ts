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
    gap: 1em;
    padding: 1em;
  }
`;

export const MessageContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8em;
  .user {
    img {
      width: 2.7em;
      height: 2.7em;
      border-radius: 50%;
    }
  }
  p {
    font-weight: 300;
  }
`;
