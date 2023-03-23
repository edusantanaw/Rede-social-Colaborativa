import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 1em;
  width: 20em;
  height: 100%;
  background-color: #6000aa;

  .project {
    display: flex;
    align-items: center;
    gap: 1em;
    img {
      width: 3.5em;
      height: 3.5em;
      border-radius: 5px;
      object-fit: cover;
    }
    span {
      color: #fff;
      font-size: 2em;
    }
  }
  .tab_itens {
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    li {
      display: flex;
      align-items: center;
      gap: 0.5em;
      color: #fff;
      cursor: pointer;
      svg {
        padding: 0.2em;
        font-size: 2.4em;
        background-color: #000;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
`;
