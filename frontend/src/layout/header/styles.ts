import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.7em 2em;
  display: flex;
  background-color: #0E0815;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  #home,
  li {
    color: #fff;
    border-radius: 50%;
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
      background-color: #fff;
      padding: 0.6em;
      border-radius: 5px;
      li {
        all: unset;
        font-size: 0.9em;
        font-weight: 300;
        cursor: pointer;
        padding: 0.5em;
        color: #000;
        a {
          color: #000;
          text-decoration: none;
        }
      }
      
    }
  }

  .search_bar{
    display: flex;
    align-items: center;
    input {
      padding: 1em;
      width: 26em;
      height: 3em;
      border-radius: 5px 0 0 5px;
      background: #fff;
      border: none;
    }

    button {
      width: 3em;
      height: 3em;
      border: none;
      background-color: #000;
      color: #fff;
      border-radius: 0px 5px 5px 0px ;
      cursor: pointer;
      svg{
        font-size: 1.4em;
      }
    }
  }
`;
