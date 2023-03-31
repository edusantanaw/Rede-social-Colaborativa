import styled from "styled-components";

export const NewTaskModal = styled.form`
  width: 30em;
  background-color: rgb(15, 15, 15);
  padding: 1em;
  z-index: 10;
  box-shadow: 0 0 3px 1px #555;
  display: flex;
  flex-direction: column;
  .title {
    padding-bottom: 1em;
    label {
      display: block;
      font-size: 1em;
      font-weight: 300;
      padding-bottom: 0.5em;
    }

    input {
      width: 100%;
      height: 3em;
      background-color: transparent;
      border: none;
      border: 1px solid #fff;
      padding: 0.5em;
      color: #fff;

      &::placeholder {
        color: #c2c2c2;
      }

      &:focus {
        outline: none;
      }
    }
  }

  #editor {
    height: 20em;
    padding: 0.5em 0em;
    color: #fff;
    #editor_cp {
      height: 14em;
    }
  }

  input[type="submit"] {
    margin-top: 1em;
    align-self: center;
    width: 10em;
    height: 2.6em;
    border: none;
    background-color: #9c27b0;
    color: #fff;
    font-size: 1.03em;
    border-radius: 2px;
    cursor: pointer;
    transition: cubic-bezier(0.165, 0.84, 0.44, 1);
    &:active {
      background-color: #9c27a0;
    }
  }
`;
