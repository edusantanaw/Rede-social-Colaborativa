import styled from "styled-components";

export const PostItem = styled.li`
  width: 40%;
  padding: 1em;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  min-height: 5.5em;
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

  .interactions {
    display: flex;
    border-top: 1px solid #000;
    div {
      width: 48%;
      display: flex;
      gap: 0.4em;
      padding: 0.8em 0.4em 0.2em 0.4em;
      align-items: center;
      svg {
        font-size: 1.5em;
      }
    }
  }
`;
