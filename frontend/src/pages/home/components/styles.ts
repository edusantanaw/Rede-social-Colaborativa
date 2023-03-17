import styled from "styled-components";

export const NewPostContainer = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 1em;
  color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

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
      background-color: transparent;
      border: none;
    }
  }

  .prev_img {
    color: #000;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    img {
      margin-top: 1em;
      width: 90%;
      border-radius: 10px;
    }
    span {
      position: absolute;
      right: 3%;
      top: 2px;
      font-size: 2em;
      color: red;
    }
  }
  .create {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    svg {
      font-size: 1.7em;
      color: #000;
    }
    #img_file {
      display: none;
    }

    button {
      width: 8em;
      height: 3em;
      border: none;
      border-radius: 5px;
      background: blue;
    }
  }
`;

export const FeedContainer = styled.div`
  width: 100%;
  margin-top: 2em;
  padding-bottom: 2em;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2em;
  }
`;
