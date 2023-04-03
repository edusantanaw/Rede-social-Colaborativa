import styled from "styled-components";

export const UppdateContainer = styled.form`
  background-color: rgb(15, 15, 15);
  width: 25em;
  height: 30em;
  z-index: 5;
  padding: 1em;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1px 1px rgb(30, 30, 30);
  border-radius: 5px;
  gap: 1em;
  .img {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .file {
    padding: 0.2em;
    label {
      display: flex;
      gap: 0.5em;
      align-items: center;
      cursor: pointer;
    }
  }

  #image {
    display: none;
  }

  #user_image {
    width: 6em;
    height: 6em;
    border-radius: 50%;
  }

  input[type="submit"] {
    background-color: #7b1fa2;
    height: 2.8em;
    width: 100%;
    color: #fff;
    font-size: 1em;
    border: none;
    font-weight: 300;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
