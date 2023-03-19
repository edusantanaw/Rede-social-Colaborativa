import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.7em 2em;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  #home,
  li {
    color: #fff;
    border-radius: 50%;
    background-color: #000;
    width: 2.1em;
    height: 2.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    cursor: pointer;
  }
  svg {
    font-weight: bold;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .perfil {
    position: relative;
    ul {
      all: unset;
      position: absolute;
      top: 2.3em;
      display: flex;
      flex-direction: column;
      background-color: #000;
      padding: 0.6em;
      border-radius: 5px;
      li {
        all: unset;
        font-size: 0.9em;
        font-weight: 300;
        cursor: pointer;
        padding: 0.5em;
        color: #fff;
        a {
          text-decoration: none;
        }
      }
      
    }
  }
`;
