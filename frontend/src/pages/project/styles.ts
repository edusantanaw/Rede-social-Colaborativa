import styled from "styled-components";

export const ProjectContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .tab {
    width: 100%;
  }
`;

export const Projects = styled.ul`
  padding: 1em 0.3em;
  background-color: rgb(10, 10, 10);
  height: 90vh;
  position: sticky;
  top: 4.1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  li {
    padding: 0.4em;
  }
  img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    padding: 0;
  }

  .current {
    background: rgba(150, 150, 150, 0.2);
    border-radius: 5px;
  }
`;
