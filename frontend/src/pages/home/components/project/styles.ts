import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 0.8em 1em;
  background-color: rgb(20, 20, 20);
  width: 28%;
  height: 30em;
  position: sticky;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  top: 5.5em;
  #create {
    cursor: pointer;
  }
  .top {
    padding: 0.5em;
    span {
      cursor: pointer;
      font-size: 1.3em;
    }
  }

  ul {
    margin-top: 0.5em;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    li,
    a {
      display: flex;
      align-items: center;
      gap: 0.8em;
      span {
        font-size: 1em;
        font-weight: 300;
      }
    }

    li {
      background-color: rgb(17, 17, 17);
      padding: 0.5em;
      border-radius: 5px;
      cursor: pointer;
    }

    .project {
      img {
        width: 2.2em;
        height: 2.2em;
        border-radius: 50%;
      }
    }

    .icon {
      background-color: rgb(10, 10, 10);
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

  .create {
    background-color: rgb(13, 13, 13);
  }
`;

export const NewProject = styled.div`
  width: 30em;
  background-color: rgb(20, 20, 20);
  color: #fff;
  z-index: 5;
  padding: 0.5em;
  border-radius: 8px;
  box-shadow: 0 0 1px 1px rgb(30, 30, 30);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  #editor {
    width: 100%;
    .ql-editor::before {
      color: #c2c2c2;
      height: 10em;
    }
    #editor_cp {
      border: 1px solid #626262;
      height: 13em;
      svg {
        display: none;
      }
      .ql-toolbar {
        display: none;
      }
    }

    input {
      display: none;
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
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }
  #editor {
    padding: 0.5em 1em;
    color: #fff;
    #editor_cp {
      height: 14em;
      &::placeholder {
        color: #fff !important;
      }
    }
  }
`;
