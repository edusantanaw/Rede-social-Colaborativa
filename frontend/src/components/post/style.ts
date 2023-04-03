import styled from "styled-components";

export const PostItem = styled.li`
  all: unset;
  width: 35em;
  padding: 1em;
  background-color: rgb(15, 15, 15);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  min-height: 5.5em;
  color: #fff;
  .top {
    display: flex;
    align-items: center;
    gap: 0.8em;
  }

  #perfil_image {
    width: 2.5em;
    height: 2.5em;
    object-fit: cover;
    border-radius: 50%;
  }

  span {
    font-weight: 500;
    font-size: 1.1em;
  }

  p {
    font-weight: 300;
  }

  #post_image {
    width: 90%;
    align-self: center;
    border-radius: 10px;
  }

  .likes {
    span {
      font-weight: 300;
      font-size: 0.9em;
    }
  }

  .interactions {
    display: flex;
    border-top: 1px solid #fff;
    div {
      width: 48%;
      display: flex;
      gap: 0.4em;
      padding: 0.8em 0.4em 0.2em 0.4em;
      align-items: center;
      svg {
        font-size: 1.5em;
      }
      cursor: pointer;
    }
  }

  #liked {
    color: red;
  }
`;

export const PostModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .close {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0005;
  }
  .content {
    all: unset;
    box-shadow: 0 0 1px 1px rgb(30, 30, 30);
    padding: 1em;
    border-radius: 10px;
    background-color: #fff;
    z-index: 3;
    min-height: 10em;
    height: min-content;
    background-color: rgb(10, 10, 10);
    .post {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      padding-bottom: 1em;
    }
  }

  #hor {
    display: flex;
    height: max-content;
    #post_image {
      padding: 1em;
      max-height: 30em;
      max-width: 50em;
      border-radius: 10px;
    }

    .post {
      padding-right: 1em;
      border-right: 1px solid #c2c2c2;
    }

    .comments {
      width: 20em;
      position: relative;
      padding: 1em;
      gap: 0.2em;
      .new_comment {
        width: 100%;
        position: absolute;
        bottom: 0;
      }
    }
  }

  #vert {
    display: flex;
    flex-direction: column;
    width: 29em;
    justify-content: flex-start;
    align-items: flex-start;

    .comments {
      border-top: 1px solid #c2c2c2;
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 1em;
    img {
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
    }
  }

  .comments {
    width: 100%;
    padding: 0.5em 0;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    .new_comment {
      display: flex;
      align-items: center;
      input {
        width: 75%;
        height: 3em;
        padding: 0.5em;
        border-radius: 5px 0 0 5px;
        border: none;
        background: rgba(150, 150, 150, 0.1);
        color: #fff;

        &:focus {
          outline: none;
        }
      }

      button {
        width: 20%;
        height: 3em;
        border: none;
        border-radius: 0 5px 5px 0;
        background-color: #000;
        color: #fff;
        font-weight: 300;
        cursor: pointer;
      }
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.9em;
      li {
        all: unset;
        padding: 0.8em 0.5em;
        width: 100%;
        border-radius: 6px;
        background-color: rgba(150, 150, 150, 0.1);
        #autor {
          display: flex;
          align-items: center;
          gap: 1em;
          padding-bottom: 0.3em;
          img {
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
            border: 1px solid #fff;
          }
        }
        p {
          padding-left: 0.5em;
          font-weight: 300;
        }
      }
    }
  }
`;
