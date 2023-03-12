import styled from "styled-components";

export const NewPostContainer = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 1em;
  color: #fff;
  border-radius: 10px;
  .new {
    display: flex;
    gap: 1em;
    div {
      background-color: #000;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    textarea {
      width: 90%;
      height: 6em;
      padding: 0.5em;
      border-radius: 7px;
      background-color: #000;
      color: #fff;
      &::placeholder {
        color: #fff;
      }
    }
  }
  .create {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    svg{
        font-size: 1.7em;
        color: #000;
    }
    #img_file {
        display: none;
    }

    button{
        width: 8em;
        height: 3em;
        border: none;
        border-radius: 5px;
        background: blue;
    }
  }
`;
