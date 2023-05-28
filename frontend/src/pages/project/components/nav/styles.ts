import styled from "styled-components";

export const NavContainer = styled.div`
  width: 14%;
  max-height: 90vh;
  background-color: rgb(15, 15, 15);
  position: sticky;
  top: 4.1em;
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
    gap: 0.7em;
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
        font-size: 2.1em;
        color: #fff;
      }
      span {
        font-size: 0.9em;
      }
    }
  }

  .selected {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    span {
      color: #d84f53;
    }

    svg {
      color: #d84f53 !important;
    }
  }
`;
