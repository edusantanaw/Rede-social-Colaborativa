import styled from "styled-components";

export const TaskContainer = styled.div`
  z-index: 5;
  background: rgb(15, 15, 15);
  width: 20em;
  height: 25em;
  padding: 1em;
  display: flex;
  position: relative;
  border-radius: 10px;
  flex-direction: column;
  gap: 0.5em;
  span {
    all: unset;
  }

  h2 {
    font-size: 1.6em;
    font-weight: 500;
  }

  .description {
    max-width: 100%;
    overflow: hidden;
    font-weight: 300;
    font-size: 0.9em;
    color: #dddd;
  }
  .buttons {
    display: flex;
    gap: 0.5em;
    position: absolute;
    bottom: 2em;
    width: 100%;
    button {
      width: 44%;
    }
  }
`;
