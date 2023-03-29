import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.7em 2em;
  display: flex;
  background-color: rgb(5,5,5);
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

  .active {
    background-color: #353535;
  }

  .perfil {
    position: relative;
    ul {
      all: unset;
      position: absolute;
      top: 2.65em;
      right: -0.5em;
      display: flex;
      flex-direction: column;
      background-color: rgb(18, 18, 18);
      padding: 0.6em;
      border-radius: 5px;
      gap: 0.4em;
      li {
        all: unset;
        width: 5em;
        font-size: 0.8em;
        cursor: pointer;
        color: #fff;
        font-weight: 300;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
      
    }
  }

  .search_bar{
    display: flex;
    align-items: center;
    gap: 2em;
    h2{
      color: #fff;
      font-weight: 500;
      text-transform: uppercase;
    }
    input {
      padding: 1em 2em;
      width: 26em;
      height: 3.3em;
      border-radius: 3px;
      background: #353535;
      border: none;
      color: #fff;
      &::placeholder{
        color: #c3c3c3;
        font-weight: 300;
      }

      &:focus {
        outline: none;
      }
    }

  }
`;
