import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  padding: 0.7em 3.5em;
  display: flex;
  background-color: rgba(22, 22, 22);
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0px 0px 1px 0px #434343;
  .part {
    width: 33.3%;
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
      width: 3.8em;
    }
  }
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
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.7em;
    justify-content: flex-end;
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
      background-color: rgb(20, 20, 20);
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

  h2 {
    color: #ea5e6e;
    font-weight: 500;
    font-size: 1em;
    cursor: pointer;
  }

  .search {
    width: 33em;
  }
`;

export const InviteContainer = styled.div`
  position: absolute;
  top: 3.3em;
  width: 11em;
  right: 2em;
    background-color: rgb(20, 20, 20);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
    font-size: 1em;
    border-bottom: 1px solid #a1a1a1;
    padding: 0.5em;
    font-weight: 500;
  }
  ul {
    all: unset;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 9em;
    width: 100%;
    max-height: 14em;
    overflow: auto;
  }
  li {
    all: unset;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    img {
      width: 2em;
      height: 2em;
      border-radius: 50%;
    }

    span {
      font-size: 0.8em;
    }
  }
  .actions {
    width: 100%;
    display: flex;
    gap: 0.5em;
    button {
      width: 42%;
    }
  }

  .project {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`;
