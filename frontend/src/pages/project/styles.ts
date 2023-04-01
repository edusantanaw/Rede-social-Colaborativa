import styled from "styled-components";

export const ProjectContainer = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  .tab {
    top: 5em;
    width: 100%;
  }
`;

export const Projects = styled.ul`
  padding: 1em 0.5em;
  background-color: rgb(10, 10, 10);
  height: 89.5vh;
  position: sticky;
  top: 4.33em;
  li {
    padding: 0.5em;
  }
  img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
`;
