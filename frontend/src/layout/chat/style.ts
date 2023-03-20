import styled from "styled-components";

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 3em;
  width: 16em;
  z-index: 3;
  background-color: #fff;
  box-shadow: 0 0 2px #a2a2a2;
  border-radius: 5px 5px 0 0;
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
`;


export const ChatMessageContainer = styled.div`
    position: fixed;
`