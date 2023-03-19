import styled from "styled-components";

export const NewPostContainer = styled.div`
  width: 40em;
  background-color: #fff;
  padding: 1em;
  color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  .new {
    width: 100%;
    display: flex;
    gap: 1em;
    color: #000;
    #photo_perfil {
      background-color: #000;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  #editor {
    height: 5em;

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
    margin-top: 4em;
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

export const ProjectContainer = styled.div`
  background-color: #fff;
  width: 25%;
  height: 30em;
  position: -webkit-sticky;
  border-radius: 10px;
  padding: 1em;
  text-align: center;

  span{
    font-size: 1.3em;
  }
`;
