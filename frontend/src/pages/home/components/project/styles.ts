import styled from "styled-components";

export const ProjectContainer = styled.div`
  background-color: rgb(15, 15, 15);
  width: 25%;
  height: 30em;
  position: sticky;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  top: 5.5em;
  .top {
    padding: 0.5em;
    span {
      font-size: 1.3em;
    }
  }

  ul {
    padding: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    li,
    a {
      display: flex;
      align-items: center;
      gap: 0.8em;
      cursor: pointer;
      span {
        font-size: 1em;
        font-weight: 300;
      }
    }

    .project {
      img {
        width: 2.2em;
        height: 2.2em;
        border-radius: 50%;
      }
    }

    .icon {
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.2em;
      width: 2.2em;
      border-radius: 5px;
      svg {
        font-size: 1.2em;
      }
    }
  }
`;

export const NewProject = styled.div`
  width: 30em;
  background-color: rgb(15, 15, 15);
  color: #fff;
  z-index: 5;
  border-radius: 8px;

  #input {
    padding: 1em;
    width: 100%;
    label {
      display: block;
      font-size: 1.1em;
      padding-bottom: 0.5em;
    }

    input {
      background-color: transparent;
      width: 100%;
      color: #fff;
      height: 3em;
      padding: 1em;
      border-radius: 5px;
    }
  }
  #editor {
    height: 20em;
    padding: 0.5em 1em;
    color: #fff;
    #editor_cp {
      height: 14em;
      &::placeholder {
        color: #fff !important;
      }
    }
  }
  .create {
    display: flex;
    justify-content: center;
    padding-bottom: 1em;
    button {
      width: 15em;
      height: 3.5em;
      border: none;
      border-radius: 5px;
      background-color: blue;
      color: #fff;
      cursor: pointer;
    }
  }
`;
