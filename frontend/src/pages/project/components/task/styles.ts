import styled from "styled-components";

export const TaskContainer = styled.div`
  width: 100%;
  padding: 0.2em 1em;
  color: #fff;
  position: relative;
  .new {
    background-color: #9c27b0;
    position: fixed;
    bottom: 2em;
    right: 2em;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    cursor: pointer;
    transition: 0.1s;
    filter: contrast(1.1);
    svg {
      font-size: 3em;
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TodoContainer = styled.div`
  padding: 1em 0;
  display: flex;
  gap: 2em;

  span {
    font-size: 1.5em;
    margin-bottom: 1em;
    color: #9c27b0;
  }

  ul {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const Card = styled.li`
  background-color: rgb(15, 15, 15);
  width: 17em;
  padding: 0.6em;
  height: 8em;
  border-radius: 5px;

  h2 {
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    font-size: 1.4em;
  }

  .description {
    max-width: 100%;
    overflow: hidden;
    font-weight: 300;
    font-size: 0.9em;
    color: #dddd;
  }
`;
