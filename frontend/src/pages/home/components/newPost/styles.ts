import styled from "styled-components";

export const NewPostContainer = styled.div`
  width: 37em;
  background-color: rgb(20, 20, 20);
  padding: 1em;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  .new {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1em;
    color: #000;
    img {
      background-color: #000;
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .new_post {
    padding: 0.7em;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    color: #000;
    span {
      font-weight: 300;
      color: #fff;
    }
  }
`;

export const NewProjectContent = styled.div`
  width: 30em;
  padding: 1em;
  border-radius: 10px;
  min-height: 25em;
  z-index: 3;
  color: #fff;
  background: rgb(15, 15, 15);
  color: #fff;
  display: flex;
  box-shadow: 0 0 1px 1px rgb(30,30,30);
  flex-direction: column;
  gap: 0.8em;
  position: relative;
  .user {
    display: flex;
    align-items: center;
    gap: 1em;
    img {
      width: 3.5em;
      height: 3.5em;
      border-radius: 50%;
    }
    span {
      font-size: 1.5em;
    }
  }
  .create {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1em;
    z-index: 3;
    svg {
      font-size: 1.7em;
      color: #000;
      cursor: pointer;
    }
    #img_file {
      display: none;
      svg {
        color: #fff;
      }
    }

    button {
      width: 10em;
      height: 3em;
      border: none;
      border-radius: 5px;
      background: #000;
      color: #fff;
      cursor: pointer;
    }
  }

  #editor {
    .ql-editor::before {
      color: white;
      height: 10em;
    }
    #editor_cp {
      border: 1px solid #fff;
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

  .prev_img {
    color: #000;
    display: flex;
    justify-content: center;
    position: relative;
    height: 16em;
    z-index: 2;
    padding-bottom: 4em;
    img {
      margin-top: 1em;
      width: 100%;
      max-height: 19em;
      object-fit: contain;
      border-radius: 10px;
    }
    span {
      z-index: 1;
      cursor: pointer;
      position: absolute;
      right: -2%;
      top: 2px;
      font-size: 2em;
      color: red;
    }
  }
`;
