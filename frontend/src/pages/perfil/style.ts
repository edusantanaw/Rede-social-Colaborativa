import styled from "styled-components";

export const PerfilContainer = styled.section`
  padding: 1em 0em;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  .posts {
    width: 100%;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
      }
  }
`;
