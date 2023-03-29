import styled from "styled-components";

export const MessagesContainer = styled.div`
  position: absolute;
  top: 3.3em;
  width: 15em;
  right: 1.5em;
  background-color: rgb(18, 18, 18);
  border-radius: 5px;
  color: #fff;
  h3 {
    text-align: center;
    font-size: 1em;
    border-bottom: 1px solid #a1a1a1;
    padding: 0.6em;
    font-weight: 500;
    cursor: auto;
  }

  ul {
    all: unset;
    padding: 0.6em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  span {
    all: unset;
    font-size: 1em;
    font-weight: 500;
    text-align: center;
  }

  li {
    all: unset;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 0.5em;
    width: 12em;
    cursor: pointer;
    img {
      width: 2.5em;
      height: 2.5em;
      object-fit: cover;
      border-radius: 50%;
    }
    span {
      font-size: 0.85em;
    }
    p {
      font-size: 0.7em;
      max-height: 1em;
      overflow: hidden;
    }
  }
`;
