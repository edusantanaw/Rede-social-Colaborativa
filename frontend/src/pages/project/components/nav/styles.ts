import styled from "styled-components";

export const NavContainer = styled.div`
  width: 14%;
  height: 100%;
  background-color: rgb(15, 15, 15);

  .project {
    padding: 0.6em;
    text-align: center;
    gap: 1em;
    border-bottom: solid 1px rgb(50, 50, 50);
    span {
      color: #fff;
      font-size: 1.5em;
      font-weight: 300;

      &:first-letter {
        text-transform: uppercase;
      }
    }
  }

  .tab_itens {
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    li {
      display: flex;
      padding: 0.3em;
      align-items: center;
      gap: 0.3em;
      color: #fff;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      cursor: pointer;
      svg {
        padding: 0.2em;
        font-size: 2.4em;
        color: #fff;
      }
    }
  }

  .selected {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    span {
      color: #9c27b0;
    }

    svg {
      color: #9c27b0 !important;
    }
  }
`;
