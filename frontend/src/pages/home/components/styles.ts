import styled from "styled-components";

export const NewPostContainer = styled.div`
  width: 40em;
  background-color: #fff;
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
      width: 3em;
      height: 3em;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .new_post {
    padding: 1em;
    width: 90%;
    background-color: #f2f2f2;
    border-radius: 40px;
    span{
      font-weight: 300;
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
  position: sticky;
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
    li {
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

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  .close {
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #0005;
  }

  .new_project {
    width: 30em;
    padding: 1em;
    border-radius: 10px;
    min-height: 25em;
    z-index: 3;
    background-color: #fff;
    display: flex;
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
    height: 13em;
    #editor_cp {
      height: 10em;
    }
  }

  .prev_img {
    color: #000;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
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
